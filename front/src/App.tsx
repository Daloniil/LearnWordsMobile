import React from "react";
import {RealmProvider} from "./contexts/RealmContext.tsx";
import AppNavigator from "./navigation/AppNavigator.tsx";


const App: React.FC = () => {
    return (
        <RealmProvider>
            <AppNavigator />
        </RealmProvider>
    );
};

export default App;
