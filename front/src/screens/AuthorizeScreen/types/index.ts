import {StackNavigationProp} from "@react-navigation/stack";

export type AuthorizeStackParamList = {
    SignUp: undefined;
    SignIn: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<
    AuthorizeStackParamList,
    'SignIn'
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
    signIn: (data: SignInFormInputs) => Promise<any>;
    signUp: (data: SignUpFormInputs) => Promise<any>;
    loading: boolean;
    error: string | null;
}


