import React from "react";
import {SafeAreaView, Button, FlatList} from "react-native";
import {Text} from "../../components/Text";
import {useUserData} from "./userOperations.ts";
import {useAppSelector} from "../../store/hooks.ts";
import {ObjectId} from "bson";

export const HomeScreen: React.FC = () => {
    const user = useAppSelector(state => state.user.user);
    const {data, addCourse, handleLogout} = useUserData();

    const addItem = async () => {
        if (user) await addCourse(user.userId, {_id: new ObjectId(), mainLanguage: 'ru', secondLanguage: 'en'});
    };


    console.log('data', data?.courses)

    return (
        <SafeAreaView>
            <Button title="Logout" onPress={handleLogout}/>
            <Button title="Add Item" onPress={addItem}/>
            {/*<FlatList*/}
            {/*    data={data}*/}
            {/*    keyExtractor={(item) => item._id.toString()}*/}
            {/*    renderItem={({item}) => (*/}
            {/*        <Text>*/}
            {/*            {item.name} - {item.age}*/}
            {/*        </Text>*/}
            {/*    )}*/}
            {/*/>*/}
        </SafeAreaView>
    );
};
