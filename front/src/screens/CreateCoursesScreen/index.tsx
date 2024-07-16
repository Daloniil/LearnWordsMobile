import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from "./styles";
import {Text} from "../../components/Text";
import useTypingEffect from "../../utils/useTypingEffect.ts";
import LanguagePicker from "../../components/LanguagePicker";
import {useTranslation} from "react-i18next";
import useLoading from "../WelcomeScreen/hooks/useLoading.ts";
import LoadingScreen from "../../components/LoadingScreen";

export const CreateCoursesScreen = () => {
    const {t} = useTranslation();
    const {displayedText} = useTypingEffect(t('createCourse.description'));
    const isLoading = useLoading(1500);

    if (isLoading) {
        return <LoadingScreen/>;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text fontSize={24} fontWeight={'bold'} style={styles.title}>{t('createCourse.title')}</Text>
            <Text fontSize={16} style={styles.description}>
                {displayedText}
            </Text>

            <View style={styles.pickerView}>
                <LanguagePicker/>
            </View>
        </SafeAreaView>
    );
};
