import {decodeToken} from '../utils/jwtUtils';
import {setUser, clearUser} from '../store/userSlice';
import {AppDispatch} from '../store/store';
import {deleteUser, getUser, insertOrUpdateUser} from "../models/SQLUserModel.ts";
import {UserModelType} from "../models/types/UserModelType.ts";

export const saveAuthData = async (token: string, dispatch: AppDispatch) => {
    const decoded = decodeToken(token);
    const user: UserModelType = {
        id: 1,
        email: decoded.email,
        userId: decoded.id,
        username: decoded.username,
        phoneNumber: decoded.phoneNumber,
        roles: JSON.stringify(decoded.roles),
        token
    };
    await insertOrUpdateUser(user);
    dispatch(setUser(user));
};

export const initializeAuthData = async (dispatch: AppDispatch) => {
    const userData = await getUser();
    if (userData) {
        dispatch(setUser(userData));
    }
};

export const removeAuthData = async (dispatch: AppDispatch) => {
    await deleteUser();
    dispatch(clearUser());
};
