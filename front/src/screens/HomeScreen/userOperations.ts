import {useEffect, useState} from "react";
import {useAppSelector, useAppDispatch} from "../../store/hooks";
import {removeAuthData} from "../../services/SQLAuthService";
import {useRealm} from "../../contexts/RealmContext";
import {ObjectId} from "bson";
import {Course, COURSES, Courses} from "../../schemas/coursesSchema.ts";

export const useUserData = () => {
    const realm = useRealm();
    const user = useAppSelector(state => state.user.user);
    const dispatch = useAppDispatch();
    const [data, setData] = useState<Courses | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                const courses = getCourses(user.userId);
                setData(courses);
            }
        };

        fetchData();
    }, [realm]);

    const addCourse = async (userId: number, course: Course) => {
        if (!realm) return;

        realm.write(() => {
            realm.create(COURSES.LANGUAGE_COURSES_TITLE, {
                _id: new ObjectId(),
                courses: [course],
                ownerId: userId
            });
        });
        const courses = getCourses(userId);
        setData(courses);
    };

    const getCourses = (userId: number): Courses | null => {
        if (!realm) return null;
        return realm.objects<Courses>(COURSES.LANGUAGE_COURSES_TITLE).filtered("ownerId == $0", userId).map(user => ({
            ...user,
            _id: user._id.toString() as unknown as ObjectId,
        }))[0];
    };

    const handleLogout = async () => {
        await removeAuthData(dispatch);
    };

    return {data, addCourse, handleLogout};
};
