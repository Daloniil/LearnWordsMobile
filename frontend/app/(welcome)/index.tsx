import {Text, View} from "@/components/Themed";
import {StyleSheet} from "react-native";
import {Link} from "expo-router";

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Learn Words</Text>
            <Link href='/modal'>Auth</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
