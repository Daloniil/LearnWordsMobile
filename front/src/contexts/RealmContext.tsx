import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getRealm } from "../services/realmService";
import { Realm } from "realm";

interface RealmProviderProps {
    children: ReactNode;
}

const RealmContext = createContext<Realm | null>(null);

export const RealmProvider: React.FC<RealmProviderProps> = ({ children }) => {
    const [realm, setRealm] = useState<Realm | null>(null);

    useEffect(() => {
        const initializeRealm = async () => {
            const realmInstance = await getRealm();
            setRealm(realmInstance);
        };

        initializeRealm();

        return () => {
            if (realm) {
                realm.close();
            }
        };
    }, []);

    return (
        <RealmContext.Provider value={realm}>
            {children}
        </RealmContext.Provider>
    );
};

export const useRealm = () => {
    return useContext(RealmContext);
};
