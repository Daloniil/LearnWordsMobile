import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from "../screens/WelcomeScreen";
import {HomeScreen} from "../screens/HomeScreen";
import {MainScreen} from "../screens/MainScreen";
import {AuthorizeScreen} from "../screens/AuthorizeScreen";
import {RootStackParamList} from "./types";
import useUserNavigation from "./useUserNavigation.ts";


const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
    useUserNavigation();
    return (
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{animationEnabled: false}}>
            <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen name="Authorize" component={AuthorizeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default AppNavigator;


