import {useTranslation} from "react-i18next";
import {useAppSelector} from "../../../../../store/hooks.ts";
import {useCourses} from "../../../../../components/LanguagePicker/useCourses.ts";
import {Button, SafeAreaView} from "react-native";
import {Text} from "../../../../../components/Text";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {ProfileStackParamList} from "../types.ts";

export const ProfileScreen = () => {
    const {t} = useTranslation();
    const user = useAppSelector(state => state.user.user);
    const {data} = useCourses();
    const navigation = useNavigation<NavigationProp<ProfileStackParamList>>();

    return (
        <SafeAreaView>
            <Text>Username: {user?.username}</Text>
            <Text>Email: {user?.email}</Text>
            <Text>Email: {user?.phoneNumber}</Text>

            <Text>Your courses: {data.map((course) =>
                <Text>{course.course.knownLanguage} - {course.course.learningLanguage}, </Text>)}</Text>

            <Button title={t('createCourse.add')} onPress={() => navigation.navigate('NewCoursesScreen')}/>
        </SafeAreaView>
    )
}
