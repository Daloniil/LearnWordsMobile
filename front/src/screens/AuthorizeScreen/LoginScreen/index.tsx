import React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Text} from "../../../components/Text";
import {useTheme} from "../../../contexts/Theme/ThemeContext.tsx";
import {lightTheme} from "../../../contexts/Theme/theme.ts";
import {Button, ButtonText, Container, ErrorText, StyledDarkInput, StyledDefaultInput} from "../styles";
import {LoginFormInputs, LoginProps} from "../types";
import useLogin from "../hooks/useLogin.ts";


export const LoginScreen: React.FC<LoginProps> = ({navigation}) => {
    const {theme} = useTheme();
    const {singIn, loading, error, schema, t} = useLogin();
    const {control, handleSubmit, formState: {errors}} = useForm<LoginFormInputs>({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data: any) => {
        await singIn({email: data.email, password: data.password});
    };

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
                        /> : <StyledDarkInput
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder={t('login.titleEmail')}
                            keyboardType="email-address"
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
                            keyboardType="email-address"
                        /> : <StyledDarkInput
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder={t('login.titlePassword')}
                            secureTextEntry
                        />}
                    </>
                )}
                name="password"
            />
            {errors.password && <ErrorText>{errors.password.message}</ErrorText>}

            <Button onPress={handleSubmit(onSubmit)} disabled={loading}>
                {loading ? <ActivityIndicator color="#fff"/> : <ButtonText>{t('login.title')}</ButtonText>}
            </Button>

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={{color: '#007bff'}}>{t('login.signUp')}</Text>
            </TouchableOpacity>
        </Container>
    );
};

