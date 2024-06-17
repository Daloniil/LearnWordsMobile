import * as yup from "yup";
import {useTranslation} from "react-i18next";

export const useSignUpValidationSchema = () => {
    const {t} = useTranslation();

    const signUpSchema = yup.object().shape({
        email: yup.string().email(t('register.wrongEmail')).required(t('register.requiredEmail')),
        password: yup.string().min(6, t('register.wrongPassword')).required(t('register.requiredPassword')),
        username: yup.string().required(t('register.requiredUsername')),
        phoneNumber: yup.string()
            .matches(/^\+?[1-9]\d{1,14}$/, t('register.wrongPhoneNumber'))
            .required(t('register.requiredPhoneNumber')),
    });


    return {signUpSchema};
};
