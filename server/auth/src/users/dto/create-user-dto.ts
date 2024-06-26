import {IsEmail, IsString, Length, Matches} from "class-validator";
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

    @ApiProperty({example: 'Alice', description: 'Name of User'})
    @IsString({message: 'Must be string'})
    readonly username: string;

    @ApiProperty({ example: '+1234567890', description: 'Phone number of User' })
    @IsString({ message: 'Must be string' })
    @Matches(/^\+?[1-9]\d{1,14}$/, { message: 'Must be a valid phone number' })
    readonly phoneNumber: string;
}
