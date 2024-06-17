import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 16px;
`;

export const StyledDefaultInput = styled.TextInput`
    width: 100%;
    height: 50px;
    border-color: gray;
    border-width: 1px;
    margin-bottom: 16px;
    padding: 12px;
    border-radius: 8px;
    font-size: 16px;
    color: black;
    text-transform: none;
`;

export const StyledDarkInput = styled.TextInput`
    width: 100%;
    height: 50px;
    border-color: #ccc;
    border-width: 1px;
    margin-bottom: 16px;
    padding: 12px;
    border-radius: 8px;
    font-size: 16px;
    color: white;
    text-transform: none;
`;


export const ErrorText = styled.Text`
    width: 100%;
    text-align: left;
    color: red;
    margin-bottom: 12px;
`;


export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color: #007bff;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin-bottom: 16px;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;

