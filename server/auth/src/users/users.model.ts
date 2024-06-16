import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";

interface UserCreationsAttrs {
    email: string;
    password: string;
    username: string;
    phoneNumber:string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationsAttrs> {

    @ApiProperty({example: '1', description: 'Id of User'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Alice', description: 'Name of User'})
    @Column({type: DataType.STRING, allowNull: false})
    username: string;

    @ApiProperty({example: '+380993335544', description: 'Phone Number'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    phoneNumber: string;

    @ApiProperty({example: 'user@mail.com', description: 'Email'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: 'tesT123', description: 'Password'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'true', description: 'Banned User'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'For Scam', description: 'Banned Reason'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string

    @BelongsToMany(() => Role, ()=>UserRoles)
    role: Role[];
}
