import {Button, SafeAreaView, StyleSheet} from "react-native";
import {Text} from "../../../../../components/Text";
import RNPickerSelect from 'react-native-picker-select';
import {useProfileScreen} from "./hook";

export const ProfileScreen: React.FC = () => {
    const {
        t,
        user,
        selectedCourses,
        transformedCourses,
        handleCourseChange,
        navigateToNewCoursesScreen,
        course
    } = useProfileScreen();

    return (
        <SafeAreaView>
            <Text>Username: {user?.username}</Text>
            <Text>Email: {user?.email}</Text>
            <Text>Phone Number: {user?.phoneNumber}</Text>
            <Text>Select
                Course: {selectedCourses?.course.knownLanguage} - {selectedCourses?.course.learningLanguage}</Text>

            <RNPickerSelect
                onValueChange={handleCourseChange}
                items={transformedCourses.map(course => ({label: course.label, value: course.id}))}
                style={pickerSelectStyles}
                value={selectedCourses?._id}
            />

            <Text>Your courses: {course.map((course) =>
                <Text key={course._id.toString()}>
                    {course.course.knownLanguage} - {course.course.learningLanguage},
                </Text>
            )}</Text>
            <Button title={t('createCourse.add')} onPress={navigateToNewCoursesScreen}/>
        </SafeAreaView>
    );
};


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});
