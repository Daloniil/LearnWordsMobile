import React from "react";
import {RealmProvider} from "./src/contexts/RealmContext.tsx";
import AppNavigator from "./src/navigation/AppNavigator.tsx";


const App: React.FC = () => {
    return (
        <RealmProvider>
            <AppNavigator />
        </RealmProvider>
    );
};

export default App;
