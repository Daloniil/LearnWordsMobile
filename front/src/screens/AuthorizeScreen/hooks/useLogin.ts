import {useState} from 'react';
import axiosInstance from "../../../services/axiosInstance.ts";
import {SignInFormInputs, SignUpFormInputs, UseLoginResult} from "../types";
import axios from "axios";
import * as yup from "yup";
import {useTranslation} from "react-i18next";


const useLogin = (): UseLoginResult => {
    const {t} = useTranslation();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    const singIn = async (data: SignInFormInputs) => {
        setLoading(true);
        setError(null);
        try {
            const res = await axiosInstance.post('/auth/auth/login', data);
            console.log(res.data.token);
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.message || 'Something went wrong');
            }
        } finally {
            setLoading(false);
        }
    };

    const signUp = async (data: SignUpFormInputs) => {
        setLoading(true);
        setError(null);
        try {
            const res = await axiosInstance.post('/auth/auth/registration', data);
            console.log(res.data.token);
        } catch (err: unknown) {
            //@ts-ignore
            console.log(err.response?.data);
            setError('Account with this data already exist');
        } finally {
            setLoading(false);
        }
    };

    const signInSchema = yup.object().shape({
        email: yup.string().email(t('login.wrongEmail')).required(t('login.requiredEmail')),
        password: yup.string().min(6, t('login.wrongPassword')).required(t('login.requiredPassword'))
    });

    const signUpSchema = yup.object().shape({
        email: yup.string().email(t('register.wrongEmail')).required(t('register.requiredEmail')),
        password: yup.string().min(6, t('register.wrongPassword')).required(t('register.requiredPassword')),
        username: yup.string().required(t('register.requiredUsername')),
        phoneNumber: yup.string()
            .matches(/^\+?[1-9]\d{1,14}$/, t('register.wrongPhoneNumber'))
            .required(t('register.requiredPhoneNumber')),
    });


    return {
        singIn,
        signUp,
        loading,
        error,
        signInSchema,
        signUpSchema,
        t,
    };
};

export default useLogin;
