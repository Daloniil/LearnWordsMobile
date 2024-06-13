import {Body, Controller, Get, Post, UseGuards, UsePipes} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user-dto";
import {UsersService} from "./users.service";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";
import {AdminRoleDto} from "./dto/admin-role.dto";
import {BanUserDto} from "./dto/ban-user.dto";
import {UnBanUserDto} from "./dto/unban-user.dto";
import {ValidationPipe} from "../pipes/validation.pipe";

@ApiTags('Users')
@Controller('users')
export class UsersController {


    constructor(private usersService: UsersService) {
    }

    @ApiOperation({summary: 'Create User'})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    @ApiOperation({summary: 'Get All Users'})
    @ApiResponse({status: 200, type: [User]})
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Get()
    getAll() {
        return this.usersService.getAllUsers()
    }

    @ApiOperation({summary: 'Set Role'})
    @ApiResponse({status: 200})
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Post('/add-role')
    addRole(@Body() addRoleDto: AdminRoleDto) {
        return this.usersService.addRole(addRoleDto)
    }

    @ApiOperation({summary: 'Remove Role'})
    @ApiResponse({status: 200})
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Post('/remove-role')
    removeRole(@Body() addRoleDto: AdminRoleDto) {
        return this.usersService.removeRole(addRoleDto)
    }

    @ApiOperation({summary: 'Ban User'})
    @ApiResponse({status: 200})
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Post('/ban')
    ban(@Body() banUserDto: BanUserDto) {
        return this.usersService.ban(banUserDto)
    }

    @ApiOperation({summary: 'Unban User'})
    @ApiResponse({status: 200})
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Post('/unban')
    unban(@Body() unbanUserDto: UnBanUserDto) {
        return this.usersService.unban(unbanUserDto)
    }


}
