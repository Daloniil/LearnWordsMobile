import React, {createContext, useContext, useState, useEffect, ReactNode} from "react";
import {useAppSelector} from "../store/hooks";
import Realm from "realm";
import {getRealmCourses} from "../services/reamlService/coursesService.ts";

interface RealmContextProps {
    realm: Realm | null;
}

const RealmContext = createContext<RealmContextProps | null>(null);

export const RealmProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [realm, setRealm] = useState<Realm | null>(null);
    const user = useAppSelector(state => state.user.user);

    useEffect(() => {
        const setupRealm = async () => {

            if (user) {
                const realmInstance = await getRealmCourses(user.token);
                setRealm(realmInstance);
            }
        };

        setupRealm();


        return () => {
            if (realm) {
                realm.close();
            }
        };
    }, [user]);

    return (
        <RealmContext.Provider value={{realm}}>
            {children}
        </RealmContext.Provider>
    );
};

export const useRealmContext = () => {
    const context = useContext(RealmContext);
    if (!context) {
        throw new Error("useServiceContext must be used within a ServiceProvider");
    }
    return context;
};

export const useRealm = () => {
    const {realm} = useRealmContext();
    return realm;
};
