import React, {useEffect} from "react";
import {RealmProvider} from "./contexts/RealmContext.tsx";
import AppNavigator from "./navigation/AppNavigator.tsx";
import {ThemeProvider} from "./contexts/Theme/ThemeContext.tsx";
import {createTables} from "./config/SQLUserDatabase.ts";
import store from "./store/store.ts";
import {Provider} from "react-redux";
import {initializeAuthData} from "./services/SQLAuthService.ts";

const App: React.FC = () => {

    useEffect(() => {
        createTables();
        initializeAuthData(store.dispatch)
    }, []);


    return (
        <Provider store={store}>
            <RealmProvider>
                <ThemeProvider>
                    <AppNavigator/>
                </ThemeProvider>
            </RealmProvider>
        </Provider>
    );
};

export default App;
