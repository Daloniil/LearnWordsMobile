import {ButtonProps} from "react-native";

export interface ThemedButtonProps extends Omit<ButtonProps, 'title'> {
    title?: string;
    onPress?: () => void;
}
