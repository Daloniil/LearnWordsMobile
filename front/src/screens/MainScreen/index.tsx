import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {EnterTabScreen} from "./Tabs/EnterTabScreen";
import {DictionaryTabScreen} from "./Tabs/DictionaryTabScreen";
import {ProfileTabScreen} from "./Tabs/ProfileTabScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export const MainScreen: React.FC = () => {
    return (
        <Tab.Navigator
            initialRouteName="Enter"
        >
            <Tab.Screen
                name="Enter"
                component={EnterTabScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Enter',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="login" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Dictionary"
                component={DictionaryTabScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Dictionary',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="book" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileTabScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size}/>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
// screenOptions={({route}) => ({
//     tabBarIcon: ({focused, color, size}) => {
//         let iconName: string;
//
//         if (route.name === 'Enter') {
//             iconName = focused ? 'home' : 'home';
//         } else if (route.name === 'Dictionary') {
//             iconName = focused ? 'home' : 'home';
//         } else if (route.name === 'Profile') {
//             iconName = focused ? 'home' : 'home';
//         } else {
//             iconName = 'circle';
//         }
//
//         return <MaterialCommunityIcons name={iconName} size={30} color={color}/>;
//     },
//     tabBarActiveTintColor: 'tomato',
//     tabBarInactiveTintColor: 'gray',
//     headerShown: false,
// })}
