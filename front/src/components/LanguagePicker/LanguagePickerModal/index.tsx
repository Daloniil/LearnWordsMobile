import React from 'react';
import {Modal, TouchableWithoutFeedback, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {styles} from "../../../screens/CreateCoursesScreen/styles";
import {LanguagePickerModalProps} from "./types.ts";
import {useTranslation} from "react-i18next";
import {COURSES} from "../../../schemas/coursesSchema.ts";


const LanguagePickerModal: React.FC<LanguagePickerModalProps> = ({
                                                                     visible,
                                                                     onClose,
                                                                     selectedValue,
                                                                     onValueChange,
                                                                     languages,
                                                                     filterLanguage,
                                                                     data,
                                                                     type
                                                                 }) => {
    const {t} = useTranslation();

    return (
        <Modal visible={visible} transparent={true} animationType="slide">
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.modalContainer}>
                    <TouchableWithoutFeedback>
                        <View style={styles.pickerWrapper}>
                            <Picker
                                selectedValue={selectedValue}
                                onValueChange={(itemValue) => {
                                    if (itemValue !== '') {
                                        onValueChange(itemValue);
                                        onClose();
                                    }
                                }}
                                style={styles.picker}
                            >
                                <Picker.Item label={t('createCourse.selectLanguage')} value=""/>
                                {languages
                                    .filter(language => language !== filterLanguage)
                                    .map(language => {
                                        const isLanguageInCourses = data.some(course => language === (type === COURSES.KNOWN_LANGUAGE ? course.course.knownLanguage : course.course.learningLanguage));
                                        if (!isLanguageInCourses) {
                                            return (
                                                <Picker.Item key={language} label={language} value={language}/>
                                            );
                                        }
                                    })}
                            </Picker>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};


export default LanguagePickerModal;
