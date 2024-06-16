import {StackNavigationProp} from "@react-navigation/stack";
import {AuthorizeStackParamList} from "../../types";

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
}

export interface LoginFormInputs {
    email: string;
    password: string;
}
