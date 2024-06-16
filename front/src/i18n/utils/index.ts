import { getLocales } from "react-native-localize";

export const filteredDefaultLanguage = (resources: Record<string, any>): string => {
    const fallback = { languageTag: 'en', isRTL: false };

    const locales = getLocales();

    let languageTag = fallback.languageTag;
    if (locales && locales.length > 0) {
        const deviceLanguage = locales[0].languageCode;
        if (Object.keys(resources).includes(deviceLanguage)) {
            languageTag = deviceLanguage;
        }
    }

    return languageTag;
};
