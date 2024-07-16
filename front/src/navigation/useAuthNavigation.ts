import {useEffect, useState} from 'react';
import {NavigationProp, StackActions, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from "./types";
import {useAppSelector} from "../store/hooks.ts";
import {useCourses} from "../components/LanguagePicker/useCourses.ts";
import NetInfo from '@react-native-community/netinfo';

const useAuthNavigation = () => {
    const user = useAppSelector(state => state.user);
    const {data} = useCourses();

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [isOnline, setIsOnline] = useState<boolean>(false);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsOnline(state.isConnected ?? false);
        });

        NetInfo.fetch().then(state => {
            setIsOnline(state.isConnected ?? false);
        });

        return () => {
            unsubscribe();
        };
    }, []);


    useEffect(() => {
        // if (isOnline) {
            if (user.user) {
                if (data.length) {
                    navigation.dispatch(StackActions.replace('Main'));
                } else {
                    navigation.dispatch(StackActions.replace('CreateCourses'));
                }
            } else {
                navigation.dispatch(StackActions.replace('Welcome'));
            }
        // } else {
        //     navigation.dispatch(StackActions.replace('Offline'));
        // }
    }, [user, data]);
};

export default useAuthNavigation;
