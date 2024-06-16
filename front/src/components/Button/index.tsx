import React from 'react';
import { Button } from 'react-native';
import {useTheme} from "../../contexts/Theme/ThemeContext.tsx";
import {ThemedButtonProps} from "./type.ts";

export const ThemedButton: React.FC<ThemedButtonProps> = ({ title = "Toggle Theme", onPress, ...rest }) => {
    const { toggleTheme } = useTheme();
    const handlePress = onPress || toggleTheme;

    return (
        <Button title={title} onPress={handlePress} {...rest} />
    );
};
