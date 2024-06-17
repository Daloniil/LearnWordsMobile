import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {Text} from "../Text";

const LoadingScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#007bff" style={styles.indicator}/>
            <Text style={styles.text}>Loading...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicator: {
        transform: [{scale: 1.5}],
    },
    text: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',

    },
});

export default LoadingScreen;
