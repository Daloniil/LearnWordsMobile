import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {UserModelType, UserState} from "../models/types/UserModelType.ts";


const initialState: UserState = {
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserModelType>) {
            state.user = action.payload;
        },
        clearUser(state) {
            state.user = null;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
