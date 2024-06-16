import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {CreateUserDto} from "../users/dto/create-user-dto";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from "bcryptjs"
import {User} from "../users/users.model";
import {LoginUserDto} from "../users/dto/login-user-dto";

@Injectable()
export class AuthService {

    constructor(private readonly userRepository: UsersService, private jwtService: JwtService) {
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
        const payload = {email: user.email, id: user.id, roles: user.role};
        return {
            token: this.jwtService.sign(payload),
        }
    }

    private async validateUser(userDto: LoginUserDto) {
        const user = await this.userRepository.getUserByEmail(userDto.email);
        const passwordEquals = await bcrypt.compare(userDto.password, user.password);
        if (user && passwordEquals) {
            return user;
        } else {
            throw new UnauthorizedException({message: 'Wrong email or password'});
        }
    }
}
