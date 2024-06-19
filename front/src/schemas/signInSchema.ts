import * as yup from "yup";
import {useTranslation} from "react-i18next";

export const useSignInValidationSchema = () => {
    const {t} = useTranslation();

    const signInSchema = yup.object().shape({
        email: yup.string().email(t('login.wrongEmail')).required(t('login.requiredEmail')),
        password: yup.string().min(6, t('login.wrongPassword')).required(t('login.requiredPassword'))
    });

    return {signInSchema};
};
