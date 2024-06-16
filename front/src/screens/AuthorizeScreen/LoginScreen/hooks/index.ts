import {useState} from 'react';
import axiosInstance from "../../../../services/axiosInstance.ts";
import {LoginData, UseLoginResult} from "../types";
import axios from "axios";


const useLogin = (): UseLoginResult => {
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

    return {
        login,
        loading,
        error,
    };
};

export default useLogin;
