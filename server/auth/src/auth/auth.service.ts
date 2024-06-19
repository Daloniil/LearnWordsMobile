import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {CreateUserDto} from "../users/dto/create-user-dto";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from "bcryptjs"
import {User} from "../users/users.model";
import {LoginUserDto} from "../users/dto/login-user-dto";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class AuthService {

    constructor(private readonly userRepository: UsersService, private jwtService: JwtService, private readonly configService: ConfigService,
    ) {
    }

    async login(userDto: LoginUserDto) {
        const user = await this.validateUser(userDto)
        return this.generateToken(user)
    }

    async registration(userDto: CreateUserDto) {
        const candidateEmail = await this.userRepository.getUserByEmail(userDto.email);
        const candidatePhoneNumber = await this.userRepository.getUserByPhoneNumber(userDto.phoneNumber);

        if (candidateEmail) {
            throw new HttpException('User with email already exists', HttpStatus.BAD_REQUEST);
        }

        if (candidatePhoneNumber) {
            throw new HttpException('User with phoneNumber already exists', HttpStatus.BAD_REQUEST);
        }

        const hashPassword = await bcrypt.hash(userDto.password, 8);
        const user = await this.userRepository.createUser({...userDto, password: hashPassword});
        return await this.generateToken(user)
    }


    private async generateToken(user: User) {
        const payload = {
            email: user.email,
            id: user.id,
            username: user.username,
            phoneNumber: user.phoneNumber,
            roles: user.role,
            iss: 'd3b07384d113edec49eaa6238ad5ff001',
            sub: user.id.toString(),
            aud: 'testing-dtytgpo'
        };
        return {
            token: this.jwtService.sign(payload, {
                secret: 'd3b07384d113edec49eaa6238ad5ff001',
                algorithm: 'HS256',
            }),
        }
    }

    private async validateUser(userDto: LoginUserDto) {
        try {
            const user = await this.userRepository.getUserByEmail(userDto.email);
            const passwordEquals = await bcrypt.compare(userDto.password, user.password);
            if (user && passwordEquals) {
                return user;
            } else {
                throw new UnauthorizedException({message: 'Wrong email or password'});
            }
        } catch (error) {
            throw new UnauthorizedException({message: 'Wrong email or password'});
        }
    }
}
