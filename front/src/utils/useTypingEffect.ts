import {useState, useEffect} from "react";

const useTypingEffect = (fullText: string) => {
    const [displayedText, setDisplayedText] = useState("");

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

    return {displayedText};
};

export default useTypingEffect;
