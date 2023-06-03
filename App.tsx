import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  List  from './app/screens/List'
import { NavigationContainer } from '@react-navigation/native';
import Login from './app/screens/Login';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loggedIn,setloggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged
  
  })
  

  return (
    {loggedIn ?}
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='List' component={List} options={{headerShown : false }} />
        <Stack.Screen name='Login' component={Login} options={{headerShown : false }} />
    </Stack.Navigator>
   </NavigationContainer>

  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
