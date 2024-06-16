import React from "react";
import {Text} from "../../components/Text";
import {ButtonText, Container, Description, StyledButton} from "./styles";
import useTypingEffect from "./hooks";
import {WelcomeProps} from "./types";

const WelcomeScreen: React.FC<WelcomeProps> = ({navigation}) => {
    const {displayedText, t} = useTypingEffect();

    return (
        <Container>
            <Text fontSize={28} fontWeight={'800'} style={{textAlign: 'center'}}>{t('welcome.title')}</Text>
            <Description>{displayedText}</Description>
            <StyledButton onPress={() => navigation.navigate('Authorize')}>
                <ButtonText>{t('welcome.button')}</ButtonText>
            </StyledButton>
        </Container>
    );
};


export default WelcomeScreen;
