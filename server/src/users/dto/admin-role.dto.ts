import {ApiProperty} from "@nestjs/swagger";

export class AdminRoleDto {
    @ApiProperty({example: 'ADMIN', description: 'Role user'})
    readonly value: string;

    @ApiProperty({example: 1, description: 'User Id'})
    readonly userId: number;
}
