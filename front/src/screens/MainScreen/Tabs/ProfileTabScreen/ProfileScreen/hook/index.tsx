import { useTranslation } from 'react-i18next';
import {RootState} from "../../../../../../store/store.ts";
import {useAppSelector} from "../../../../../../store/hooks.ts";
import {useCourses} from "../../../../../../components/LanguagePicker/useCourses.ts";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {ProfileStackParamList} from "../../types.ts";
import {useCourseSelector} from "../../../../../../utils/useCourseSelector.ts";
import {Courses} from "../../../../../../schemas/coursesSchema.ts";

export const useProfileScreen = () => {
    const { t } = useTranslation();
    const user = useAppSelector(state => state.user.user);
    const selectedCourses = useAppSelector((state: RootState) => state.selectedCourses.courses);
    const { course } = useCourses();
    const navigation = useNavigation<NavigationProp<ProfileStackParamList>>();
    const { setCourse } = useCourseSelector();

    const transformCourses = (courses: Courses[]) => {
        return courses.map(course => ({
            id: course._id.toString(),
            label: `${course.course.knownLanguage} - ${course.course.learningLanguage}`,
            value: {
                knownLanguage: course.course.knownLanguage,
                learningLanguage: course.course.learningLanguage
            }
        }));
    };

    const transformedCourses = transformCourses(course);

    const handleCourseChange = (id: string | null) => {
        if (user && id) {
            const selectedValue = course.find(course => course._id.toString() === id);
            if (user && selectedValue) setCourse(user, selectedValue);
        }
    };

    const navigateToNewCoursesScreen = () => {
        navigation.navigate('NewCoursesScreen');
    };

    return {
        t,
        user,
        selectedCourses,
        transformedCourses,
        handleCourseChange,
        navigateToNewCoursesScreen,
        course
    };
};
