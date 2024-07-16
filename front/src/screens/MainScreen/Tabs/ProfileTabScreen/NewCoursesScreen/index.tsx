import {SafeAreaView} from "react-native";
import LanguagePicker from "../../../../../components/LanguagePicker";
import React from "react";

export const NewCoursesScreen = () => {
    return (
        <SafeAreaView style={{
            flex: 1, justifyContent: 'center', padding: 16,
            marginHorizontal: 15
        }}>
            <LanguagePicker/>
        </SafeAreaView>
    )
}
