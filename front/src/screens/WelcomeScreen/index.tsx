import React from 'react';
import { Text } from '../../components/Text';
import { ButtonText, Container, Description, StyledButton } from './styles';
import useLoading from './hooks/useLoading';
import { WelcomeProps } from './types';
import LoadingScreen from '../../components/LoadingScreen';
import useTypingEffect from "./hooks/useTypingEffect.ts";

const WelcomeScreen: React.FC<WelcomeProps> = ({ navigation }) => {
    const { displayedText, t } = useTypingEffect();
    const isLoading = useLoading(500);

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <Container>
            <Text fontSize={28} fontWeight={'800'} style={{ textAlign: 'center' }}>{t('welcome.title')}</Text>
            <Description>{displayedText}</Description>
            <StyledButton onPress={() => navigation.navigate('Authorize')}>
                <ButtonText>{t('welcome.button')}</ButtonText>
            </StyledButton>
        </Container>
    );
};

export default WelcomeScreen;
