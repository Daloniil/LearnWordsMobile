import {Theme} from "./theme.ts";

export interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
}
