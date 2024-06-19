export interface UserModelType {
    id: number;
    email: string;
    userId: number;
    username: string;
    phoneNumber: string;
    roles: string;
    token: string;
}

export interface UserState {
    user: UserModelType | null;
}
