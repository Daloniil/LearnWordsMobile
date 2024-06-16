import React from 'react';
import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from "./types.ts";
import WelcomeScreen from "../screens/WelcomeScreen";
import {HomeScreen} from "../screens/HomeScreen";
import {useTheme} from "../contexts/Theme/ThemeContext.tsx";
import {lightTheme} from "../contexts/Theme/theme.ts";


const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
    const {theme} = useTheme();

    return (
        <NavigationContainer theme={theme === lightTheme ? DefaultTheme : DarkTheme}>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen
                    name="Welcome"
                    component={WelcomeScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
