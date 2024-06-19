import { ObjectId } from "bson";

export interface User {
    _id: ObjectId;
    name: string;
    age: number;
    ownerId: number;
}

export const UserSchema = {
    name: "User",
    properties: {
        _id: "objectId",
        name: "string",
        age: "int",
        ownerId: "int"
    },
    primaryKey: "_id",
};

