import React from "react";
import {RealmProvider} from "./contexts/RealmContext.tsx";
import AppNavigator from "./navigation/AppNavigator.tsx";
import {ThemeProvider} from "./contexts/Theme/ThemeContext.tsx";
import {Layout} from "./layout";


const App: React.FC = () => {
    return (
        <RealmProvider>
            <ThemeProvider>
                <Layout>
                    <AppNavigator/>
                </Layout>
            </ThemeProvider>
        </RealmProvider>
    );
};

export default App;
