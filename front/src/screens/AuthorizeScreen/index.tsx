import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import {AuthorizeStackParamList} from "./types";

const Stack = createStackNavigator<AuthorizeStackParamList>();

export const AuthorizeScreen = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}
