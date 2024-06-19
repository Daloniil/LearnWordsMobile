import React from "react";
import {SafeAreaView, Button, FlatList} from "react-native";
import {Text} from "../../components/Text";
import {useUserData} from "./userOperations.ts";
import {useAppSelector} from "../../store/hooks.ts";

export const HomeScreen: React.FC = () => {
    const user = useAppSelector(state => state.user.user);
    const {data, addUser, handleLogout} = useUserData();

    const addItem = async () => {
        if (user) await addUser(user.userId, "New Item", Math.floor(Math.random() * 100));
    };

    return (
        <SafeAreaView>
            <Button title="Logout" onPress={handleLogout}/>
            <Button title="Add Item" onPress={addItem}/>
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
