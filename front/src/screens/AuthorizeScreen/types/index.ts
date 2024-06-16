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

export interface SignInFormInputs {
    email: string;
    password: string;
}

export interface SignUpFormInputs {
    email: string;
    password: string;
    phoneNumber: string;
    username: string;
}


export interface UseLoginResult {
    singIn: (data: SignInFormInputs) => Promise<any>;
    signUp: (data: SignUpFormInputs) => Promise<any>;
    loading: boolean;
    error: string | null;
    signInSchema: yup.ObjectSchema<{ email: string, password: string }, yup.AnyObject, {
        email: undefined
        password: undefined
    }, "">
    signUpSchema: yup.ObjectSchema<{
        email: string
        password: string
        username: string
        phoneNumber: string
    }, yup.AnyObject, {
        email: undefined
        password: undefined
        username: undefined
        phoneNumber: undefined
    }, "">,
    t: TFunction<"translation", undefined>
}


