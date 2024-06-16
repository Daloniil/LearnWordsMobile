import {StackNavigationProp} from "@react-navigation/stack";
import {AuthorizeStackParamList} from "../../types";
import * as yup from "yup";
import {TFunction} from "i18next";

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
    login: (data: LoginData) => Promise<void>;
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
