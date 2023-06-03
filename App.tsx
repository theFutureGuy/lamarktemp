import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  List  from './app/screens/List'
import { NavigationContainer } from '@react-navigation/native';
import Details from './app/screens/Details';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='List'>
        <Stack.Screen name='List' component={List} options={{headerShown : false }} />
        <Stack.Screen name='Details' component={Details} options={{headerShown : false }} />
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
