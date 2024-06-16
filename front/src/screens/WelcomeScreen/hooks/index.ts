import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

const useTypingEffect = () => {
    const { t } = useTranslation();
    const [displayedText, setDisplayedText] = useState("");
    const fullText = t('welcome.description');

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText(fullText.slice(0, index + 1));
            index++;
            if (index === fullText.length) {
                clearInterval(interval);
            }
        }, 30);

        return () => clearInterval(interval);
    }, [fullText]);

    return { displayedText, t };
};

export default useTypingEffect;
