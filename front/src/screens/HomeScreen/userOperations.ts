import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { removeAuthData } from "../../services/SQLAuthService";
import { User } from "../../schemas/userSchema.ts";
import { useRealm } from "../../contexts/RealmContext";
import { ObjectId } from "bson";

export const useUserData = () => {
    const realm = useRealm();
    const user = useAppSelector(state => state.user.user);
    const dispatch = useAppDispatch();
    const [data, setData] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                const users = getUsers(user.userId);
                setData([...users]);
            }
        };

        fetchData();
    }, [realm]);

    const addUser = async (userId: number, name: string, age: number) => {
        if (!realm) return;

        realm.write(() => {
            realm.create("User", {
                _id: new ObjectId(),
                name,
                age,
                ownerId: userId
            });
        });
        const users = getUsers(userId);
        setData([...users]);
    };

    const getUsers = (userId: number): User[] => {
        if (!realm) return [];
        return realm.objects<User>("User").filtered("ownerId == $0", userId).map(user => ({
            ...user,
            _id: user._id.toString() as unknown as ObjectId,
        }));
    };

    const handleLogout = async () => {
        await removeAuthData(dispatch);
    };

    return { data, addUser, handleLogout };
};
