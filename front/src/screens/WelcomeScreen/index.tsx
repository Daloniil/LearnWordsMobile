import React from "react";
import {Button, SafeAreaView} from "react-native";
import {WelcomeProps} from "./types";
import {Text} from "../../components/Text";

const WelcomeScreen: React.FC<WelcomeProps> = ({navigation}) => {
    return (
        <SafeAreaView>
            <Text>Welcome Page</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </SafeAreaView>
    );
};

export default WelcomeScreen;
