import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Text} from "../../../../components/Text";
import {useTheme} from "../../../../contexts/Theme/ThemeContext.tsx";
import {lightTheme} from "../../../../contexts/Theme/theme.ts";
import {Button, ButtonText, Container, ErrorText, StyledDarkInput, StyledDefaultInput} from "../../styles";
import {SignUpFormInputs} from "../../types";
import useLogin from "../../hooks/useLogin.ts";
import {useSignUpValidationSchema} from "../../../../schemas/signUpSchema.ts";
import {useTranslation} from "react-i18next";


export const SignUpScreen = () => {

    const {t} = useTranslation();
    const {theme} = useTheme();
    const {signUp, loading, error} = useLogin();
    const {signUpSchema} = useSignUpValidationSchema()

    const {control, handleSubmit, formState: {errors}} = useForm<SignUpFormInputs>({
        resolver: yupResolver(signUpSchema)
    });

    const onSubmit = async (data: SignUpFormInputs) => {
        await signUp({
            email: data.email,
            password: data.password,
            username: data.username,
            phoneNumber: data.phoneNumber
        });
    };

    return (
        <Container>
            <Text fontSize={24} fontWeight={'800'} style={{marginBottom: 24}}>{t('register.title')}</Text>

            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <>
                        {theme === lightTheme ? <StyledDefaultInput
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder={t('register.titleUsername')}
                            autoCapitalize="none"
                        /> : <StyledDarkInput
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder={t('register.titleUsername')}
                            autoCapitalize="none"
                        />}
                    </>
                )}
                name="username"

            />
            {errors.username && <ErrorText>{errors.username.message}</ErrorText>}


            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <>
                        {theme === lightTheme ? <StyledDefaultInput
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder={t('register.titlePhoneNumber')}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        /> : <StyledDarkInput
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder={t('register.titlePhoneNumber')}
                            autoCapitalize="none"
                        />}
                    </>
                )}
                name="phoneNumber"

            />
            {errors.phoneNumber && <ErrorText>{errors.phoneNumber.message}</ErrorText>}

            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <>
                        {theme === lightTheme ? <StyledDefaultInput
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder={t('register.titleEmail')}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        /> : <StyledDarkInput
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder={t('register.titleEmail')}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />}
                    </>
                )}
                name="email"
            />
            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <>
                        {theme === lightTheme ? <StyledDefaultInput
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder={t('register.titlePassword')}
                            secureTextEntry
                            autoCapitalize="none"
                        /> : <StyledDarkInput
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder={t('register.titlePassword')}
                            secureTextEntry
                            autoCapitalize="none"
                        />}
                    </>
                )}
                name="password"
            />
            {errors.password && <ErrorText>{errors.password.message}</ErrorText>}

            {error && <ErrorText>{error}</ErrorText>}

            <Button onPress={handleSubmit(onSubmit)} disabled={loading}>
                {loading ? <ActivityIndicator color="#fff"/> : <ButtonText>{t('register.title')}</ButtonText>}
            </Button>

        </Container>
    );
};

