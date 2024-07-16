import {ProfileScreen} from "./ProfileScreen";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {NewCoursesScreen} from "./NewCoursesScreen";

const Stack = createNativeStackNavigator();

export const ProfileTabScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="NewCoursesScreen"
                component={NewCoursesScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

