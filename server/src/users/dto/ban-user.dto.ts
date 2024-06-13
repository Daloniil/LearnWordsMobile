import {ApiProperty} from "@nestjs/swagger";

export class BanUserDto {
    @ApiProperty({example: 1, description: 'User Id'})
    readonly userId: number;

    @ApiProperty({example: 'Ban for Scam', description: 'Reason of ban'})
    readonly banReason: string;
}
