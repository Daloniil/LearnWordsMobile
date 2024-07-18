import {ObjectId} from "bson";
import {ObjectSchema} from "realm";

export interface Courses {
    _id: ObjectId;
    course: Course;
    ownerId: number;
}

export interface Course {
    _id: ObjectId;
    knownLanguage: string,
    learningLanguage: string,
}

export const CoursesSchema: ObjectSchema = {
    name: "Courses",
    properties: {
        _id: "objectId",
        course: "Course",
        ownerId: "int",
    },
    primaryKey: "_id",
};

export const CourseSchema: ObjectSchema = {
    name: "Course",
    properties: {
        _id: "objectId",
        knownLanguage: "string",
        learningLanguage: "string",
    },
    primaryKey: "_id",
};

export enum COURSES {
    COURSES_TITLE = "Courses",
    COURSES_NAME = "сourses",
    COURSE_TITLE = "Course",
    COURSE_NAME = "course",
    KNOWN_LANGUAGE = "knownLanguage",
    LEARNING_LANGUAGE = "learningLanguage"
}


export interface SerializedCourse {
    _id: string;
    course: {
        _id: string;
        knownLanguage: string;
        learningLanguage: string;
    };
    ownerId: number;
}


export interface CoursesState {
    courses: SerializedCourse | null;
}

