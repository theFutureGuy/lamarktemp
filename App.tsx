import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';
import Startpage from './app/screens/Startpage';
import * as LocalAuthentication from "expo-local-authentication";

export default function App() {

  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  
  useEffect(()=>{
      async()=>{
        (async()=>{
          const compatible = await LocalAuthentication.hasHardwareAsync();
          setIsBiometricSupported(compatible);
      })();
      }
  })

  const onAuthenticate = ()=>{
    const sysAuth = LocalAuthentication.authenticateAsync({
      promptMessage : 'Please Authenticate to proceed',
      fallbackLabel : 'Authenticate'
    });
    sysAuth.then((result)=>{
      setIsAuthenticated(result.success);
    })
    .catch((error)=>{
      Alert.alert(error);
    });
  }

  const alertAuth = ()=>{
    Alert.alert("Pleae Ensure that you enable Screenlock for Security purposes")
  }


  const PopAuth = ()=>{
    
    if(isAuthenticated)
    {
      return (<Startpage/>);
    }
    onAuthenticate();
    return(<View style={styles.container}><Button title='Click here to Authenticate' onPress={onAuthenticate}></Button></View>);
  }

  return (
    <PopAuth/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
});