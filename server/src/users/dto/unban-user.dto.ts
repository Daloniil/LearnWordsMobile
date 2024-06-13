import {ApiProperty} from "@nestjs/swagger";

export class UnBanUserDto {
    @ApiProperty({example: 1, description: 'User Id'})
    readonly userId: number;
}
