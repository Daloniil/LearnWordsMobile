import {createStackNavigator} from '@react-navigation/stack';
import {AuthorizeStackParamList} from "./types";
import {SignUpScreen} from "./screens/SignUpScreen";
import {SignInScreen} from "./screens/SignInScreen";
import React from "react";

const Stack = createStackNavigator<AuthorizeStackParamList>();

export const AuthorizeScreen = () => {

    return (
        <Stack.Navigator initialRouteName="SignIn">
            <Stack.Screen name="SignIn" component={SignInScreen} options={{headerShown: false}}/>
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}
