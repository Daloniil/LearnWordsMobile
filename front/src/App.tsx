import React from "react";
import AppNavigator from "./navigation/AppNavigator.tsx";
import {ThemeProvider} from "./contexts/Theme/ThemeContext.tsx";
import store from "./store/store.ts";
import {Provider} from "react-redux";
import {RealmProvider} from "./contexts/RealmContext.tsx";
import {SQLProvider} from "./contexts/SQLContext.tsx";

const App: React.FC = () => {


    return (
        <Provider store={store}>
            <SQLProvider>
                <RealmProvider>
                    <ThemeProvider>
                        <AppNavigator/>
                    </ThemeProvider>
                </RealmProvider>
            </SQLProvider>
        </Provider>
    );
};

export default App;
