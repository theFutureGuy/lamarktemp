import React,{useLayoutEffect} from 'react'
import { createBottomTabNavigator ,} from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import TempScreen from '../screens/TempScreen';
import Graph from '../screens/Graph';
import { Icon } from '@rneui/base';

export type TabStackParamList = {
    Temps: undefined;
    Graph: undefined
}

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
 const navigation = useNavigation();
 useLayoutEffect(() => {
    navigation.setOptions({
        headerShown:false,
    })
 })

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarActiveTintColor:"#59C1CC",
      tabBarInactiveTintColor:"gray",
      tabBarIcon: ({ focused,color,size}) => {
        if(route.name === 'Temps'){
        return(<Icon name='users' type='entypo' color={focused ? "#59C1CC" : "gray"}/>);
      }else if (route.name === 'Graph'){
        return(<Icon name='box' type='entypo' color={focused ? "#EB6A7C" : "gray"}/>);
      }
    }

    })
    }>
      <Tab.Screen name='Temps' component={TempScreen} />
      <Tab.Screen name='Graph' component={Graph} />
    </Tab.Navigator>
  )
}

export default TabNavigator