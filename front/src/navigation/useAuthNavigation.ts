import {useEffect} from 'react';
import {NavigationProp, StackActions, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from "./types";
import {useAppDispatch, useAppSelector} from "../store/hooks.ts";
import {useCourses} from "../components/LanguagePicker/useCourses.ts";
import {loadCourses} from "../store/slices/selectedCourseSlice.ts";
import {useCourseSelector} from "../utils/useCourseSelector.ts";

const useAuthNavigation = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.user.user);
    const {course} = useCourses();
    const {setCourse} = useCourseSelector()

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();


    useEffect(() => {
        dispatch(loadCourses());
    }, [dispatch]);


    useEffect(() => {
        if (user) {
            if (course.length) {
                navigation.dispatch(StackActions.replace('Main'));
                if (user) setCourse(user, course[0]);
            } else {
                navigation.dispatch(StackActions.replace('CreateCourses'));
            }
        } else {
            navigation.dispatch(StackActions.replace('Welcome'));
        }
    }, [user, course]);
};

export default useAuthNavigation;
