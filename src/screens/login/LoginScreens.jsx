import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components'

export default function LoginScreens() {
  return (
    <Container>
        <BtnContainer>
            <Btn>
                <BtnTitle>로그인</BtnTitle>
            </Btn>
            <Separator/>
            <Btn>
                <BtnTitle>가입하기</BtnTitle>
            </Btn>
        </BtnContainer>
    </Container>
  )
}

const Container = styled.View`
 flex :1;
 justify-content : center;
 align-items : center;
`;

const BtnContainer = styled.View`
    flex-direction : row;
`;

const Btn = styled.TouchableOpacity`
`;

const BtnTitle = styled.Text`
    font-size : 20px;
    font-weight : bold;
`;

const   Separator =  styled.View`
    width : 10px;
`;
