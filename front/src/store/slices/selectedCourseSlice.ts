import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CoursesState, SerializedCourse} from "../../schemas/coursesSchema.ts";


export const initialState: CoursesState = {
    courses: null,
};

const saveCoursesToStorage = async (selectedCourses: SerializedCourse | null) => {
    try {
        const jsonValue = JSON.stringify(selectedCourses);
        await AsyncStorage.setItem('@courses', jsonValue);
    } catch (e) {
    }
};

const loadCoursesFromStorage = async (): Promise<SerializedCourse | null> => {
    try {
        const jsonValue = await AsyncStorage.getItem('@courses');
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        return null;
    }
};

const selectedCoursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        setSelectedCourses(state, action: PayloadAction<SerializedCourse | null>) {
            state.courses = action.payload;
            saveCoursesToStorage(state.courses);
        },
    },
});

export const {setSelectedCourses} = selectedCoursesSlice.actions;

export const loadCourses = () => async (dispatch: any) => {
    const selectedCourses = await loadCoursesFromStorage();
    dispatch(setSelectedCourses(selectedCourses));
};

export default selectedCoursesSlice.reducer;


