import {IsEmail, IsString, Length} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({example: 'user@mail.com', description: 'Email'})
    @IsString({message: 'Must be string'})
    @IsEmail({}, {message: 'Must be a valid email'})
    readonly email: string;

    @ApiProperty({example: 'tesT123', description: 'Password'})
    @IsString({message: 'Must be string'})
    @Length(4, 18, {message: 'Must be at least 4 characters long and less than 16 characters'})
    readonly password: string;
}
