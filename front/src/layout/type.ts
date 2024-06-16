import {ViewProps, ViewStyle} from "react-native";

export interface LayoutProps extends ViewProps {
    padding?: number;
    margin?: number;
    backgroundColor?: string;
    flex?: number;
    alignItems?: ViewStyle['alignItems'];
    justifyContent?: ViewStyle['justifyContent'];
    customStyles?: ViewStyle;
}
