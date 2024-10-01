import {Text, SafeAreaView, Image, View} from 'react-native';
import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({navigation}){

    const goToLoginScreens = () => {
      navigation.navigate("Login")
      console.log("로그인 화면으로 이동");
    }
    return (
        <SafeAreaView>
          <StoryList horizontal={true} showsHorizontalScrollIndicator={false}>
            <Story onPress={goToLoginScreens}>
              <Image 
                source={{
                  uri:""}}
                style={{width:80, height: 80, borderRadius:40}}
                />
              <Ionicons name='chatbubble-ellipses-outline' size={40} color={'black'}/>
              <UserName>react</UserName>
            </Story>
            <Story>
              <Image 
                source={{
                  uri:"."}}
                style={{width:80, height: 80, borderRadius:40}}
                />
              <UserName>테스트로 다시 바꿈</UserName>
            </Story>
            <Story>
              <Image 
                source={{
                  uri:"."}}
                style={{width:80, height: 80, borderRadius:40}}
                />
              <UserName>리액트</UserName>
            </Story>
            <Story>
              <Image 
                source={{
                  uri:"."}}
                style={{width:80, height: 80, borderRadius:40}}
                />
              <UserName>리액트</UserName>
            </Story>
            <Story>
              <Image 
                source={{
                  uri:""}}
                style={{width:80, height: 80, borderRadius:40}}
                />
              <UserName>리액트</UserName>
            </Story>
            <Story>
              <Image 
                source={{
                  uri:""}}
                style={{width:80, height: 80, borderRadius:40}}
                />
              <UserName>리액트</UserName>
            </Story>
            <Story>
              <Image 
                source={{
                  uri:"."}}
                style={{width:80, height: 80, borderRadius:40}}
                />
              <UserName>리액트</UserName>
            </Story>
          </StoryList>
        </SafeAreaView>
    );
  }

const StoryList = styled.ScrollView`
 `;

const Story = styled.TouchableOpacity`
  margin : 0 8px;
  `;

const UserName = styled.Text`
margin-top: 10px;
text-align: center;
`;

const Container = styled.View``;