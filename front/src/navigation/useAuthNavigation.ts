import { useEffect } from 'react';
import { NavigationProp, StackActions, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "./types";
import { useAppSelector } from "../store/hooks.ts";

const useAuthNavigation = () => {
    const user = useAppSelector(state => state.user);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    useEffect(() => {
        if (user.user) {
            navigation.dispatch(StackActions.replace('Home'));
        } else {
            navigation.dispatch(StackActions.replace('Welcome'));
        }
    }, [user]);
};

export default useAuthNavigation;
