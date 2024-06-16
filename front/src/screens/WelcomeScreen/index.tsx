import React from "react";
import {Text} from "../../components/Text";
import {ButtonText, Container, Description, StyledButton} from "./styles";
import useTypingEffect from "./hooks";
import {WelcomeProps} from "./types";

const WelcomeScreen: React.FC<WelcomeProps> = ({navigation}) => {
    const {displayedText, t} = useTypingEffect();

    return (
        <Container>
            <Text fontSize={28}>{t('welcome.title')}</Text>
            <Description>{displayedText}</Description>
            <StyledButton onPress={() => navigation.navigate('Home')}>
                <ButtonText>{t('welcome.button')}</ButtonText>
            </StyledButton>
        </Container>
    );
};


export default WelcomeScreen;
