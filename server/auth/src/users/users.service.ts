import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./users.model";
import {CreateUserDto} from "./dto/create-user-dto";
import {RolesService} from "../roles/roles.service";
import {AdminRoleDto} from "./dto/admin-role.dto";
import {BanUserDto} from "./dto/ban-user.dto";
import {UnBanUserDto} from "./dto/unban-user.dto";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User, private roleService: RolesService) {
    }

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue("USER")
        await user.$set('role', [role.id])
        user.role = [role];
        return user
    }

    async getAllUsers() {
        return await this.userRepository.findAll({include: {all: true}})
    }

    async getUserByEmail(email: string) {
        return await this.userRepository.findOne({where: {email}, include: {all: true}})
    }

    async getUserByPhoneNumber(phoneNumber: string) {
        return await this.userRepository.findOne({where: {phoneNumber}, include: {all: true}})
    }


    async addRole(dto: AdminRoleDto) {
        const user = await this.userRepository.findByPk(dto.userId)
        const role = await this.roleService.getRoleByValue(dto.value)
        if (user && role) {
            await user.$add('role', role.id)
            return dto
        }
        throw new HttpException("User or Rule doesn't found", HttpStatus.NOT_FOUND)
    }

    async removeRole(dto: AdminRoleDto) {
        const user = await this.userRepository.findByPk(dto.userId)
        const role = await this.roleService.getRoleByValue(dto.value)
        if (user && role) {
            await user.$remove('role', role.id)
            return dto
        }
        throw new HttpException("User or Rule doesn't found", HttpStatus.NOT_FOUND)
    }


    async ban(dto: BanUserDto) {
        const user = await this.userRepository.findByPk(dto.userId)
        if (!user) {
            throw new HttpException("User doesn't found", HttpStatus.NOT_FOUND)
        }

        if (!dto.banReason) {
            throw new HttpException("Ban Reason doesn't found", HttpStatus.NOT_FOUND)
        }

        user.banned = true
        user.banReason = dto.banReason
        await user.save()
        return user
    }

    async unban(dto: UnBanUserDto) {
        const user = await this.userRepository.findByPk(dto.userId)
        user.banned = false
        user.banReason = null
        await user.save()
        return user
    }

}
