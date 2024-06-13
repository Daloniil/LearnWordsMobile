import {ApiProperty} from "@nestjs/swagger";
import {IsNumber} from "class-validator";

export class UnBanUserDto {
    @IsNumber({}, {message: 'Must be number'})
    @ApiProperty({example: 1, description: 'User Id'})
    readonly userId: number;
}
