import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString} from "class-validator";

export class AdminRoleDto {
    @IsString({message: 'Must be string'})
    @ApiProperty({example: 'ADMIN', description: 'Role user'})
    readonly value: string;

    @IsNumber({}, {message: 'Must be number'})
    @ApiProperty({example: 1, description: 'User Id'})
    readonly userId: number;
}
