import {App, Credentials, Realm} from 'realm';
import {TestSchema} from './schemas';

const appId = 'sync-word-euxrlxr';
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
        schema: [TestSchema],
        sync: {
            flexible: true,
            user: app.currentUser,
        },
    };

    const realm = await Realm.open(config);

    const existingSubscription = realm.subscriptions.findByName("allTestCollection");
    if (!existingSubscription) {
        await realm.subscriptions.update(mutableSubs => {
            mutableSubs.add(realm.objects("TestCollection"), { name: "allTestCollection" });
        });
        await realm.subscriptions.waitForSynchronization();
    }

    return realm;
}
