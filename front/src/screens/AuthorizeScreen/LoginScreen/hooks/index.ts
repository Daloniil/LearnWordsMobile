import {useState} from 'react';
import axiosInstance from "../../../../services/axiosInstance.ts";
import {LoginData, UseLoginResult} from "../types";
import axios from "axios";
import * as yup from "yup";
import {useTranslation} from "react-i18next";


const useLogin = (): UseLoginResult => {
    const {t} = useTranslation();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    const login = async (data: LoginData) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axiosInstance.post('/auth/auth/login', data);
            console.log('Login successful', response.data);
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
        login,
        loading,
        error,
        schema,
        t,
    };
};

export default useLogin;
