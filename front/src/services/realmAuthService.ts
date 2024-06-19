import {App, Configuration, Credentials, Realm} from "realm";
import {UserSchema} from "../schemas/userSchema.ts";
import AsyncStorage from "@react-native-async-storage/async-storage";

const appId = "testing-dtytgpo";
const appConfig = {
    id: appId,
    timeout: 10000,
};

const app = new App(appConfig);

export async function getRealm(jwtToken: string) {
    try {
        const credentials = Credentials.jwt(jwtToken);
        const user = await app.logIn(credentials);
        await AsyncStorage.setItem("realmUser", JSON.stringify(user));
        console.log("Logged in with anonymous credentials:", user.id);
    } catch (err) {
        console.error("Failed to log in", err);
    }

    const config: Configuration = {
        schema: [UserSchema],
        sync: {
            flexible: true,
            user: app.currentUser as Realm.AnyUser,
        },
    };

    const realm = await Realm.open(config);

    const existingSubscription = realm.subscriptions.findByName("allUser");
    if (!existingSubscription) {
        await realm.subscriptions.update(mutableSubs => {
            mutableSubs.add(realm.objects("User"), {name: "allUser"});
        });
        await realm.subscriptions.waitForSynchronization();
    }

    return realm;
}
