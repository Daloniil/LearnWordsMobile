import {IsEmail, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({example: 'user@mail.com', description: 'Email'})
    @IsEmail()
    readonly email: string;

    @ApiProperty({example: 'tesT123', description: 'Password'})
    @IsString()
    readonly password: string;
}
