import React from "react";
import {Button, SafeAreaView} from "react-native";
import {WelcomeProps} from "./types";
import {Text} from "../../components/Text";
import { useTranslation } from 'react-i18next';

const WelcomeScreen: React.FC<WelcomeProps> = ({navigation}) => {
    const {t} = useTranslation();

    return (
        <SafeAreaView>
            <Text>Welcome Page</Text>
            <Text>{t('welcome')}</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </SafeAreaView>
    );
};

export default WelcomeScreen;
