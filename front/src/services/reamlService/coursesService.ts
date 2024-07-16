import {Configuration, Credentials, Realm} from "realm";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {CoursesSchema, CourseSchema, COURSES} from "../../schemas/coursesSchema.ts";
import {app} from "../../config/realmConfig.ts";



export async function getRealmCourses(jwtToken: string) {
    try {
        const credentials = Credentials.jwt(jwtToken);
        const user = await app.logIn(credentials);
        await AsyncStorage.setItem("realmUser", JSON.stringify(user));
        console.log("Logged in with JWT credentials:", user.id);
    } catch (err) {
        console.error("Failed to log in", err);
    }

    const config: Configuration = {
        schema: [CoursesSchema, CourseSchema],
        sync: {
            flexible: true,
            user: app.currentUser as Realm.AnyUser,
        },
    };

    const realm = await Realm.open(config);

    const existingSubscription = realm.subscriptions.findByName(COURSES.COURSES_NAME);
    if (!existingSubscription) {
        await realm.subscriptions.update(mutableSubs => {
            mutableSubs.add(realm.objects(COURSES.COURSES_TITLE), {name: COURSES.COURSES_NAME});
        });
        await realm.subscriptions.waitForSynchronization();
    }

    const existingSubscriptionCourse = realm.subscriptions.findByName(COURSES.COURSE_NAME);
    if (!existingSubscriptionCourse) {
        await realm.subscriptions.update(mutableSubs => {
            mutableSubs.add(realm.objects(COURSES.COURSE_TITLE), {name: COURSES.COURSE_NAME});
        });
        await realm.subscriptions.waitForSynchronization();
    }

    return realm;
}
