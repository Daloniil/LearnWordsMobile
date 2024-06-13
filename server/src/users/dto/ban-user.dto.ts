import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString} from "class-validator";

export class BanUserDto {
    @IsString({message: 'Must be string'})
    @ApiProperty({example: 1, description: 'User Id'})
    readonly userId: number;

    @IsNumber({}, {message: 'Must be number'})
    @ApiProperty({example: 'Ban for Scam', description: 'Reason of ban'})
    readonly banReason: string;
}
