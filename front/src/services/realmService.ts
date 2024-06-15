import { App, Credentials, Realm } from "realm";
import {TestCollectionsSchema} from "../schemas/TestCollectionSchema.ts";

const appId = "sync-word-euxrlxr";
const appConfig = {
    id: appId,
    timeout: 10000,
};

const app = new App(appConfig);

export async function getRealm() {
    if (!app.currentUser) {
        try {
            const user = await app.logIn(Credentials.anonymous());
            console.log("Logged in with anonymous credentials:", user.id);
        } catch (err) {
            console.error("Failed to log in", err);
        }
    }

    const config = {
        schema: [TestCollectionsSchema],
        sync: {
            flexible: true,
            user: app.currentUser,
        },
    };

    //@ts-ignore
    const realm = await Realm.open(config);

    const existingSubscription = realm.subscriptions.findByName("allTestCollections");
    if (!existingSubscription) {
        await realm.subscriptions.update(mutableSubs => {
            mutableSubs.add(realm.objects("TestCollections"), { name: "allTestCollections" });
        });
        await realm.subscriptions.waitForSynchronization();
    }

    return realm;
}
