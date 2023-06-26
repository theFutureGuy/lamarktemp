import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  List  from './List'
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import Details from './Details';

const Stack = createNativeStackNavigator();
// const InsideLayout = createNativeStackNavigator( () => { 
//   return(
//     <InsideLayout.Navigator>
//       <InsideLayout.Screen name="List" component={ List } />
//       <InsideLayout.Screen name="Details" component={ Details } />
//     </InsideLayout.Navigator>
//   );
// )}
 
 

export default function Startpage() {
  
  const [user,setUser] = useState<User | null>(null)
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      // console.log('user',user);
      setUser(user)
    })
  
  })
  

  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>        
      { user ? (
      <Stack.Screen name='Inside' component={List} options={{headerShown : false }} />
      ): ( 
          <Stack.Screen name='Login' component={Login} options={{headerShown : false }} />
          
          )

      }
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