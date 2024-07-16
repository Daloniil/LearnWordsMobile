import {ObjectId} from "bson";

export interface Courses {
    _id: ObjectId;
    courses: Course[];
    ownerId: number;
}

export interface Course {
    _id: ObjectId;
    mainLanguage: string,
    secondLanguage: string,
}

export const CoursesSchema: Realm.ObjectSchema = {
    name: "LanguageCourses",
    properties: {
        _id: "objectId",
        courses: {
            type: "list",
            objectType: "Course",
        },
        ownerId: "int",
    },
    primaryKey: "_id",
};

export const CourseSchema: Realm.ObjectSchema = {
    name: "Course",
    properties: {
        _id: "objectId",
        mainLanguage: "string",
        secondLanguage: "string",
    },
    primaryKey: "_id",
};


export enum COURSES {
    LANGUAGE_COURSES_TITLE = "LanguageCourses",
    LANGUAGE_COURSES_NAME = "languageCourses",
    COURSE_TITLE = "Course",
    COURSE_NAME = "course",
}
