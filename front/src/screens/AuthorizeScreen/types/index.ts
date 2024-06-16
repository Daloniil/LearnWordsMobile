import {StackNavigationProp} from "@react-navigation/stack";
import * as yup from "yup";
import {TFunction} from "i18next";
import {AxiosResponse} from "axios";

export type AuthorizeStackParamList = {
    Register: undefined;
    Login: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<
    AuthorizeStackParamList,
    'Login'
>;

export type LoginProps = {
    navigation: LoginScreenNavigationProp;
};

export interface LoginData {
    email: string;
    password: string;
}

export interface UseLoginResult {
    singIn: (data: LoginData) => Promise<AxiosResponse<any, any> | undefined>;
    signUp: (data: LoginData) => Promise<AxiosResponse<any, any> | undefined>;
    loading: boolean;
    error: string | null;
    schema: yup.ObjectSchema<{ email: string, password: string }, yup.AnyObject, {
        email: undefined
        password: undefined
    }, "">
    t: TFunction<"translation", undefined>
}

export interface LoginFormInputs {
    email: string;
    password: string;
}
