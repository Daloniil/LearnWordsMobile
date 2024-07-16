import {useState} from 'react';
import {SignInFormInputs, SignUpFormInputs, UseLoginResult} from "../types";
import {useAppDispatch} from "../../../store/hooks.ts";
import {signInRequest, signUpRequest} from "../../../services/apiService/login.ts";

const useLogin = (): UseLoginResult => {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    const signIn = async (data: SignInFormInputs) => {
        setLoading(true);
        setError(null);
        try {
            await signInRequest(data, dispatch);
        } catch (err: any) {
            setError(err.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    const signUp = async (data: SignUpFormInputs) => {
        setLoading(true);
        setError(null);
        try {
            await signUpRequest(data, dispatch);
        } catch (err: any) {
            setError(err.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    return {
        signIn,
        signUp,
        loading,
        error,
    };
};

export default useLogin;
