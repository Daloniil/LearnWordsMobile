import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, FlatList, Button } from "react-native";
import { useRealm } from "../../contexts/RealmContext.tsx";
import { ObjectId } from "bson";

type TestCollection = {
    _id: ObjectId;
    name: string;
    age: number;
};

export const HomeScreen: React.FC = () => {
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

    return (
        <SafeAreaView>
            <Button title="Add Itemaas" onPress={addItem} />
            <FlatList
                data={data}
                keyExtractor={(item) => item._id.toString()}
                renderItem={({ item }) => (
                    <Text>
                        {item.name} - {item.age}
                    </Text>
                )}
            />
        </SafeAreaView>
    );
};

