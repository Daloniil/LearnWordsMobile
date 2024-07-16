import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        marginHorizontal: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 24,
    },
    label: {
        marginBottom: 8,
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 12,
        marginBottom: 16,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    pickerWrapper: {
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '90%',
        height: '30%',
        padding: 20,
        justifyContent: 'center',
    },
    pickerView: {
        flex: 0.75,
        marginTop: 90,
    },
    picker: {
        flex: 1,
    },
});
