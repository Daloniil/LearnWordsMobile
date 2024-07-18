import React, { useEffect, ReactNode } from "react";
import { user_createTables } from "../config/SQLUserDatabase.ts";
import { initializeAuthData } from "../services/SQLAuthService.ts";
import store from "../store/store.ts";

interface SQLProviderProps {
    children: ReactNode;
}

export const SQLProvider: React.FC<SQLProviderProps> = ({ children }) => {
    useEffect(() => {
        user_createTables();
        initializeAuthData(store.dispatch);
    }, []);

    return <>{children}</>;
};
