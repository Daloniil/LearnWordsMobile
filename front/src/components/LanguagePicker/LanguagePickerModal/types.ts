import {COURSES, Courses} from "../../../schemas/coursesSchema.ts";

export interface LanguagePickerModalProps {
    visible: boolean;
    onClose: () => void;
    selectedValue: string;
    onValueChange: (value: string) => void;
    languages: string[];
    filterLanguage?: string;
    data: Courses[]
    type: COURSES.KNOWN_LANGUAGE | COURSES.LEARNING_LANGUAGE;
}
