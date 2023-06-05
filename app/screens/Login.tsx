import { ActivityIndicator, Button, StyleSheet, Text,TextInput,View } from 'react-native';
import React,{ useState } from 'react';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from 'firebase/auth';



export default function Login() {
 const [email,setEmail] = useState('');
 const [password,setPassword] = useState('');
 const [loading,setLoading] = useState(false); 
 const auth = FIREBASE_AUTH;

const signIn = async () => {
    setLoading(true)
    try {
        const response = await signInWithEmailAndPassword(auth,email,password);
        const user = response.user;
        console.log('Logged in with:', user.email);
    }
    catch (err:any){ console.log(err); 
        alert(err.message);}
    finally { setLoading(false)}
    console.log(loading);
}

const signUp = async () => {
    setLoading(true)
    try{
        const response = await createUserWithEmailAndPassword(auth,email, password)
        const user = response.user;
        console.log('Registered with:', user.email);
    }
    catch (err:any){ alert(err.message);}
    finally{ setLoading(false);} 
    
}

const signOut =async () => {
    
}

return (
      <View style={style.container}>
        <Text>Lamark</Text>
            <TextInput  style={style.input} placeholder='EMAIL iD' autoCapitalize='none'  onChangeText={(text) => {setEmail(text)}} />
            <TextInput secureTextEntry={true}  style={style.input} placeholder='PASSWORD' autoCapitalize='none' onChangeText={(text) => {setPassword(text)}} />
            {
                loading ? <ActivityIndicator size="large" color="#0000f" /> :
                <>
                    <Button title="Login by me" onPress={signIn} />
                    <Button title="Register by click on me" onPress={signUp} />
                </>
            }
      </View>
  );
};

const style = StyleSheet.create({
    container:{
        marginHorizontal:20,
        flex:1,
        justifyContent:'center'
    },
    input: {
        marginVertical:4,
        height:50,
        borderWidth:1,
        borderRadius:4,
        padding:10,
        backgroundColor: "#fff"

    }
});