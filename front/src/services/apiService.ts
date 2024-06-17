
import { Dispatch } from "redux";
import {SignInFormInputs, SignUpFormInputs} from "../screens/AuthorizeScreen/types";
import axiosConfig from "../config/axiosConfig.ts";
import {saveAuthData} from "./SQLAuthService.ts";

export const signInRequest = async (data: SignInFormInputs, dispatch: Dispatch) => {
    const res = await axiosConfig.post('/auth/auth/login', data);
    await saveAuthData(res.data.token, dispatch);
};

export const signUpRequest = async (data: SignUpFormInputs, dispatch: Dispatch) => {
    const res = await axiosConfig.post('/auth/auth/registration', data);
    await saveAuthData(res.data.token, dispatch);
};
