import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/home/Home"
import ProfileScreen from './src/screens/profile/Profile';
import LoginScreens from './src/screens/login/LoginScreens';

const RootStack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" options={{headerTitleAlign:'center'}} component={HomeScreen}/>
        <RootStack.Screen name="Profile" component={ProfileScreen} />
        <RootStack.Screen name="Login" component={LoginScreens}/>
      </RootStack.Navigator>
     </NavigationContainer>
  );
}

