import {useDispatch} from "react-redux";
import {setSelectedCourses} from "../store/slices/selectedCourseSlice.ts";
import {UserModelType} from "../models/types/UserModelType.ts";
import {Courses} from "../schemas/coursesSchema.ts";

export const useCourseSelector = () => {
    const dispatch = useDispatch();

    const setCourse = (user: UserModelType, courses: Courses) => {
        if (user) {
            const newCourse = {
                _id: courses._id.toString(),
                course: {
                    _id: courses.course._id.toString(),
                    knownLanguage: courses.course.knownLanguage,
                    learningLanguage: courses.course.learningLanguage,
                },
                ownerId: user.userId,
            };
            dispatch(setSelectedCourses(newCourse));
        }
    }

    return {setCourse}
}
