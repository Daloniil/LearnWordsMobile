import {ApiProperty} from "@nestjs/swagger";

export class CreateRoleDto {
    @ApiProperty({example: 'ADMIN', description: 'Role user'})
    readonly value: string;

    @ApiProperty({example: 'Description', description: 'Description for  Rule'})
    readonly description: string;
 }
