import {useState} from 'react';
import axiosInstance from "../../../services/axiosInstance.ts";
import {LoginData, UseLoginResult} from "../types";
import axios from "axios";
import * as yup from "yup";
import {useTranslation} from "react-i18next";


const useLogin = (): UseLoginResult => {
    const {t} = useTranslation();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    const singIn = async (data: LoginData) => {
        setLoading(true);
        setError(null);
        try {
            return await axiosInstance.post('/auth/auth/login', data);
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.message || 'Something went wrong');
            }
        } finally {
            setLoading(false);
        }
    };

    const signUp = async (data: LoginData) => {
        setLoading(true);
        setError(null);
        try {
            return await axiosInstance.post('/auth/auth/register', data);
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.message || 'Something went wrong');
            }
        } finally {
            setLoading(false);
        }
    };

    const schema = yup.object().shape({
        email: yup.string().email(t('login.wrongEmail')).required(t('login.requiredEmail')),
        password: yup.string().min(6, t('login.wrongPassword')).required(t('login.requiredPassword'))
    });


    return {
        singIn,
        signUp,
        loading,
        error,
        schema,
        t,
    };
};

export default useLogin;
