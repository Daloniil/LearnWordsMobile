import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 20px 0 20px;
`;

export const Description = styled.Text`
    font-size: 16px;
    color: #666;
    text-align: center;
    margin-bottom: 40px;
    padding: 30px 0 0 0;
`;

export const StyledButton = styled.TouchableOpacity`
    background-color: #6200ee;
    padding: 15px 30px;
    border-radius: 25px;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 18px;
`;
