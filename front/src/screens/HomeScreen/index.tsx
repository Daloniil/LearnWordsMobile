import React, {useEffect, useState} from "react";
import {SafeAreaView, FlatList, Button} from "react-native";
import {useRealm} from "../../contexts/RealmContext.tsx";
import {ObjectId} from "bson";
import {Text} from "../../components/Text";
import {useAppDispatch, useAppSelector} from "../../store/hooks.ts";
import {removeAuthData} from "../../services/SQLAuthService.ts";

type TestCollection = {
    _id: ObjectId;
    name: string;
    age: number;
};

export const HomeScreen: React.FC = () => {
    const user = useAppSelector(state => state.user);

    const [data, setData] = useState<TestCollection[]>([]);
    const realm = useRealm();

    useEffect(() => {
        if (!realm) return;

        const collection = realm.objects<TestCollection>("TestCollections");
        collection.addListener((collections, changes) => {
            setData([...collections]);
        });

        return () => {
            collection.removeAllListeners();
        };
    }, [realm]);

    const addItem = () => {
        if (!realm) return;

        realm.write(() => {
            realm.create("TestCollections", {
                _id: new ObjectId(),
                name: "New Item",
                age: Math.floor(Math.random() * 100),
            });
        });
    };

    const dispatch = useAppDispatch();

    const handleLogout = async () => {
        await removeAuthData(dispatch);
    };

    console.log('user', user)

    return (
        <SafeAreaView>
            <Button title="Logout" onPress={handleLogout}/>
            <Button title="Add Itemaas" onPress={addItem}/>
            <FlatList
                data={data}
                keyExtractor={(item) => item._id.toString()}
                renderItem={({item}) => (
                    <Text>
                        {item.name} - {item.age}
                    </Text>
                )}
            />
        </SafeAreaView>
    );
};

