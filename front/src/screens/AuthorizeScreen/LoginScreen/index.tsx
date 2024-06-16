import React from 'react';
import {Text, Button} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components/native';
import {LoginFormInputs, LoginProps} from "./types";
import useLogin from "./hooks";

const schema = yup.object().shape({
    email: yup.string().email('Неверный email').required('Email обязателен'),
    password: yup.string().min(6, 'Минимум 6 символов').required('Пароль обязателен')
});

const Container = styled.View`
    flex: 1;
    justify-content: center;
    padding: 16px;
    background-color: #f5f5f5;
`;

const StyledInput = styled.TextInput`
    height: 40px;
    border-color: gray;
    border-width: 1px;
    margin-bottom: 12px;
    padding: 10px;
    background-color: white;
`;

const ErrorText = styled.Text`
    color: red;
    margin-bottom: 12px;
`;

const LoginScreen: React.FC<LoginProps> = ({navigation}) => {
    const {login, loading, error} = useLogin();
    const {control, handleSubmit, formState: {errors}} = useForm<LoginFormInputs>({
        resolver: yupResolver(schema)
    });


    const onSubmit = async (data: any) => {
        await login({email: data.email, password: data.password});
    };

    return (
        <Container>
            <Text>Login</Text>
            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <StyledInput
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="Email"
                    />
                )}
                name="email"
            />
            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <StyledInput
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="Password"
                        secureTextEntry
                    />
                )}
                name="password"
            />
            {errors.password && <ErrorText>{errors.password.message}</ErrorText>}

            <Button title="Login" onPress={handleSubmit(onSubmit)}/>

            <Button
                title="Sign Up"
                onPress={() => navigation.navigate('Register')}
            />
        </Container>
    );
};

export default LoginScreen;
