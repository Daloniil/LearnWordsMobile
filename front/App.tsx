import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, FlatList, Button } from "react-native";
import { ObjectId } from "bson";
import {getRealm} from "./src/realmConfig";

type TestCollection = {
    _id: ObjectId;
    name: string;
    age: number;
};

const App: React.FC = () => {
    const [data, setData] = useState<TestCollection[]>([]);
    const [realm, setRealm] = useState<Realm | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const realmInstance = await getRealm();
            setRealm(realmInstance);
            const collection = realmInstance.objects<TestCollection>("TestCollections");
            collection.addListener((collections, changes) => {
                console.log("collections", collections);
                setData([...collections]);
            });

            return () => {
                if (realmInstance) {
                    const collection = realmInstance.objects<TestCollection>("TestCollections");
                    collection.removeAllListeners();
                    realmInstance.close();
                }
            };
        };

        fetchData();
    }, []);

    const addItem = async () => {
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
            <Button title="Add Item" onPress={addItem} />
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

export default App;
