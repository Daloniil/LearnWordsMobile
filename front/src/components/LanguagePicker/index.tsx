import {Text} from "../Text";
import {styles} from "../../screens/CreateCoursesScreen/styles";
import {Alert, Button, TouchableOpacity} from "react-native";
import LanguagePickerModal from "./LanguagePickerModal";
import {languages} from "../../utils/languageList.ts";
import React, {memo, useState} from "react";
import {ObjectId} from "bson";
import {useCourses} from "./useCourses.ts";
import {useAppSelector} from "../../store/hooks.ts";
import {useTranslation} from "react-i18next";
import {COURSES} from "../../schemas/coursesSchema.ts";

const LanguagePicker = () => {
    const {t} = useTranslation();
    const user = useAppSelector(state => state.user.user);
    const {course, addCourse} = useCourses();

    const [knownLanguage, setKnownLanguage] = useState<string>('');
    const [learningLanguage, setLearningLanguage] = useState<string>('');

    const [showKnownPicker, setShowKnownPicker] = useState(false);
    const [showLearningPicker, setShowLearningPicker] = useState(false);

    const handleAdd = async () => {
        if (!knownLanguage || !learningLanguage) {
            Alert.alert(t('createCourse.validation'), t('createCourse.required'));
            return;
        }

        if (user) await addCourse({
            _id: new ObjectId(user.userId),
            knownLanguage,
            learningLanguage
        });
    };


    return (
        <>
            <Text fontSize={16} fontWeight={'bold'} style={styles.label}>{t('createCourse.knownLanguage')}</Text>
            <TouchableOpacity
                style={styles.pickerContainer}
                onPress={() => setShowKnownPicker(true)}
            >
                <Text fontSize={16}>
                    {knownLanguage || t('createCourse.selectLanguage')}
                </Text>
            </TouchableOpacity>

            <LanguagePickerModal
                visible={showKnownPicker}
                onClose={() => setShowKnownPicker(false)}
                selectedValue={knownLanguage}
                onValueChange={setKnownLanguage}
                languages={languages}
                filterLanguage={learningLanguage}
                course={course}
                type={COURSES.KNOWN_LANGUAGE}
            />

            <Text fontSize={16} fontWeight={'bold'} style={styles.label}>{t('createCourse.learningLanguage')}</Text>
            <TouchableOpacity
                style={styles.pickerContainer}
                onPress={() => setShowLearningPicker(true)}
            >
                <Text fontSize={16}>
                    {learningLanguage || t('createCourse.selectLanguage')}
                </Text>
            </TouchableOpacity>

            <LanguagePickerModal
                visible={showLearningPicker}
                onClose={() => setShowLearningPicker(false)}
                selectedValue={learningLanguage}
                onValueChange={setLearningLanguage}
                languages={languages}
                filterLanguage={knownLanguage}
                course={course}
                type={COURSES.LEARNING_LANGUAGE}
            />

            <Button title={t('createCourse.add')} onPress={handleAdd}/>
        </>
    )
}

export default memo(LanguagePicker);
