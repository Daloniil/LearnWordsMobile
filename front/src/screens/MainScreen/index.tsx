import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {EnterTabScreen} from "./Tabs/EnterTabScreen";
import {DictionaryTabScreen} from "./Tabs/DictionaryTabScreen";

const Tab = createBottomTabNavigator();

export const MainScreen: React.FC = () => {

    return (
        <Tab.Navigator initialRouteName="Enter">
            <Tab.Screen name="Enter" component={EnterTabScreen} options={{headerShown: false}}/>
            <Tab.Screen name="Dictionary" component={DictionaryTabScreen} options={{headerShown: false}}/>
        </Tab.Navigator>
    )
}
