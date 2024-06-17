import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserModelType} from "../models/types/UserModelType.ts";


const initialState: UserModelType | null = null;

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        //@ts-ignore
        setUser(_, action: PayloadAction<UserModelType>) {
            return action.payload;
        },
        clearUser() {
            return null;
        },
    },
});

export const {setUser, clearUser} = userSlice.actions;
export default userSlice.reducer;
