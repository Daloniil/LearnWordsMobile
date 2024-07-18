import {useEffect, useState} from "react";
import {useAppSelector, useAppDispatch} from "../../store/hooks";
import {removeAuthData} from "../../services/SQLAuthService";
import {useRealm} from "../../contexts/RealmContext";
import {ObjectId} from "bson";
import {Course, COURSES, Courses} from "../../schemas/coursesSchema.ts";
import {NavigationProp, StackActions, useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "../../navigation/types";
import {useCourseSelector} from "../../utils/useCourseSelector.ts";
import {RootState} from "../../store/store.ts";

export const useCourses = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const realm = useRealm();
    const user = useAppSelector(state => state.user.user);
    const selectedCourses = useAppSelector((state: RootState) => state.selectedCourses.courses);
    const dispatch = useAppDispatch();
    const {setCourse: setSelectedCourse} = useCourseSelector()
    const [course, setCourse] = useState<Courses[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                const courses = getCourses(user.userId);
                setCourse([...courses]);
            }
        };

        fetchData();
    }, [realm]);

    const addCourse = async (course: Course) => {
        if (!realm || !user) return;

        const newCourse = {
            _id: new ObjectId(),
            course,
            ownerId: user.userId
        };
        realm.write(() => {
            realm.create(COURSES.COURSES_TITLE, newCourse);
        });
        const courses = getCourses(user.userId);
        setCourse([...courses]);
        if (!selectedCourses) setSelectedCourse(user, newCourse)

        navigation.dispatch(StackActions.replace('Main'));
    };

    const getCourses = (userId: number): Courses[] => {
        if (!realm) return [];
        return realm.objects<Courses>(COURSES.COURSES_TITLE).filtered("ownerId == $0", userId).map(user => ({
            ...user,
            _id: user._id.toString() as unknown as ObjectId,
        }));
    };

    const handleLogout = async () => {
        await removeAuthData(dispatch);
    };

    return {course, addCourse, handleLogout};
};
