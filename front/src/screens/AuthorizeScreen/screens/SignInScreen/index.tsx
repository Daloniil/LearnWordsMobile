import React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Text} from "../../../../components/Text";
import {useTheme} from "../../../../contexts/Theme/ThemeContext.tsx";
import {lightTheme} from "../../../../contexts/Theme/theme.ts";
import {Button, ButtonText, Container, ErrorText, StyledDarkInput, StyledDefaultInput} from "../../styles";
import {SignInFormInputs, LoginProps} from "../../types";
import useLogin from "../../hooks/useLogin.ts";
import {useAppSelector} from "../../../../store/hooks.ts";
import {useSignInValidationSchema} from "../../../../validations/signInSchema.ts";
import {useTranslation} from "react-i18next";


export const SignInScreen: React.FC<LoginProps> = ({navigation}) => {
    const user = useAppSelector(state => state.user);

    const {t} = useTranslation();
    const {theme} = useTheme();
    const {signIn, loading, error} = useLogin();
    const {signInSchema} = useSignInValidationSchema()

    const {control, handleSubmit, formState: {errors}} = useForm<SignInFormInputs>({
        resolver: yupResolver(signInSchema)
    });

    const onSubmit = async (data: SignInFormInputs) => await signIn({email: data.email, password: data.password});

    console.log('user', user)
    return (
        <Container>
            <Text fontSize={24} fontWeight={'800'} style={{marginBottom: 24}}>{t('login.title')}</Text>
            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <>
                        {theme === lightTheme ? <StyledDefaultInput
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder={t('login.titleEmail')}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        /> : <StyledDarkInput
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder={t('login.titleEmail')}
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
                            placeholder={t('login.titlePassword')}
                            secureTextEntry
                            autoCapitalize="none"

                        /> : <StyledDarkInput
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder={t('login.titlePassword')}
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
                {loading ? <ActivityIndicator color="#fff"/> : <ButtonText>{t('login.title')}</ButtonText>}
            </Button>


            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={{color: '#007bff'}}>{t('login.signUp')}</Text>
            </TouchableOpacity>
        </Container>
    );
};

