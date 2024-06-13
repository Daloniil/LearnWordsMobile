import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class CreateRoleDto {
    @IsString({message: 'Must be string'})
    @ApiProperty({example: 'ADMIN', description: 'Role user'})
    readonly value: string;

    @IsString({message: 'Must be string'})
    @ApiProperty({example: 'Description', description: 'Description for  Rule'})
    readonly description: string;
 }
