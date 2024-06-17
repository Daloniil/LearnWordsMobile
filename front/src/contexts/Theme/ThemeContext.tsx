import React, {createContext, useState, useContext, ReactNode, useEffect} from 'react';
import {ThemeProvider as StyledThemeProvider} from 'styled-components/native';
import {useColorScheme} from 'react-native';
import {darkTheme, lightTheme, Theme} from './theme.ts';
import {I18nextProvider} from 'react-i18next';
import {Layout} from "../../layout";
import i18n from "../../i18n";
import {DarkTheme, DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {ThemeContextProps} from "./types.ts";


const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const colorScheme = useColorScheme();
    const [theme, setTheme] = useState<Theme>(colorScheme === 'dark' ? darkTheme : lightTheme);

    const toggleTheme = () => {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
    };

    useEffect(() => {
        setTheme(colorScheme === 'dark' ? darkTheme : lightTheme);
    }, [colorScheme]);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <StyledThemeProvider theme={theme}>
                <I18nextProvider i18n={i18n}>
                    <Layout>
                        <NavigationContainer theme={theme === lightTheme ? DefaultTheme : DarkTheme}>
                            {children}
                        </NavigationContainer>
                    </Layout>
                </I18nextProvider>
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
