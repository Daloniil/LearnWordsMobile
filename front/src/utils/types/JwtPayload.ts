export interface JwtPayload {
    email: string;
    id: number;
    username: string;
    phoneNumber: string;
    roles: Array<{
        id: number;
        value: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        UserRoles: {
            id: number;
            roleId: number;
            userId: number;
        };
    }>;
    exp: number;
}
