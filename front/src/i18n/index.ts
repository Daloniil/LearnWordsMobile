import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import 'intl';
import 'intl-pluralrules';
import enTranslation from './en/translation.json';
import ruTranslation from './ru/translation.json';
import ukTranslation from './uk/translation.json';
import {filteredDefaultLanguage} from "./utils";


const resources = {
    en: {translation: enTranslation},
    ru: {translation: ruTranslation},
    uk: {translation: ukTranslation}
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: filteredDefaultLanguage(resources),
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
        compatibilityJSON: 'v3'
    });

export default i18n;
