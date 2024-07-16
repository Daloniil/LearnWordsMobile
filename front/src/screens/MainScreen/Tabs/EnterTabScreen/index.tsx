import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import styled from 'styled-components/native';
import {Text} from "../../../../components/Text";

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;


const Input = styled.TextInput`
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  background-color: #fff;
`;

const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #007aff;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const ButtonText = styled.Text`
    font-size: 18px;
    color: #fff;
    font-weight: 600;
`;

export const EnterTabScreen: React.FC = () => {
    const [word, setWord] = useState('');
    const [translation, setTranslation] = useState('');

    const handleAddWord = () => {
        if (word && translation) {
            // Добавьте свою логику здесь
            Alert.alert('Успешно', `Слово: ${word}, Перевод: ${translation}`);
            setWord('');
            setTranslation('');
        } else {
            Alert.alert('Ошибка', 'Пожалуйста, введите слово и перевод');
        }
    };

    return (
        <Container>
            <InputContainer>
                <Text fontSize={18}>Русское слово</Text>
                <Input
                    value={word}
                    onChangeText={setWord}
                    placeholder="Введите русское слово"
                />
            </InputContainer>
            <InputContainer>
                <Text fontSize={18}>Перевод</Text>
                <Input
                    value={translation}
                    onChangeText={setTranslation}
                    placeholder="Введите перевод"
                />
            </InputContainer>
            <Button onPress={handleAddWord}>
                <ButtonText>Добавить</ButtonText>
            </Button>
        </Container>
    );
};



