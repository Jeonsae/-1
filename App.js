import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { GiftedChat, Send } from 'react-native-gifted-chat';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  const [messages, setMessages] = useState([]);

  React.useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: '채팅 기능 테스트 입니다',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Support',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, newMessages));
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View style={styles.sendButton}>
          <MaterialIcons name="send" size={28} color="blue" />
        </View>
      </Send>
    );
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <GiftedChat
          messages={messages}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: 1,
          }}
          renderSend={renderSend}
          alwaysShowSend
          placeholder="메시지를 입력하세요"
        />
        <Text>{/* 이곳에 문자열을 넣지 마세요! */}</Text>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sendButton: {
    marginRight: 10,
    marginBottom: 5,
  },
});

export default App; 

