import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../firbaseConfig';

export type RootStackParamList = {
    Main: undefined;
    Model: {userid:string,name:string};
    Order: {order:any};
}

const Rootstack = createNativeStackNavigator();

const RootNavigator = () => {
  const [user,setUser] = useState<User | null>(null)
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      // console.log('user',user);
      setUser(user)
    })
  })


  return (
    <Rootstack.Navigator initialRouteName='Login'>
      {user ? 
        ( <Rootstack.Group>
              <Rootstack.Screen name='main' component={TabNavigator} />
          </Rootstack.Group>
        ) : ( <Rootstack.Screen name='Login' component={Login} options={{headerShown : false }} />)
      }

      
    </Rootstack.Navigator>
  )
}

export default RootNavigator