import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice.ts';
import selectedCoursesReducer from './slices/selectedCourseSlice.ts';

const store = configureStore({
    reducer: {
        user: userReducer,
        selectedCourses: selectedCoursesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
