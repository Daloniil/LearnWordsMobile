import React from "react";
import {RealmProvider} from "./contexts/RealmContext.tsx";
import AppNavigator from "./navigation/AppNavigator.tsx";
import {ThemeProvider} from "./contexts/Theme/ThemeContext.tsx";

const App: React.FC = () => {
    return (
        <RealmProvider>
            <ThemeProvider>
                <AppNavigator/>
            </ThemeProvider>
        </RealmProvider>
    );
};

export default App;
