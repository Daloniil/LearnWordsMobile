import {useEffect} from 'react';
import {NavigationProp, StackActions, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from "./types";
import {useAppSelector} from "../store/hooks.ts";
import {useCourses} from "../components/LanguagePicker/useCourses.ts";

const useAuthNavigation = () => {
    const user = useAppSelector(state => state.user);
    const {data} = useCourses();

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    useEffect(() => {
        if (user.user) {
            if (data.length) {
                navigation.dispatch(StackActions.replace('Main'));
            } else {
                navigation.dispatch(StackActions.replace('CreateCourses'));
            }
        } else {
            navigation.dispatch(StackActions.replace('Welcome'));
        }
    }, [user, data]);
};

export default useAuthNavigation;
