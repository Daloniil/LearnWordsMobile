import {RootStackParamList} from "../../../navigation/types/types.ts";
import {StackNavigationProp} from "@react-navigation/stack";

type WelcomeScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Welcome'
>;

export type WelcomeProps = {
    navigation: WelcomeScreenNavigationProp;
};
