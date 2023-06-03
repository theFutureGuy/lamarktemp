import { ActivityIndicator, Button, KeyboardAvoidingView, StyleSheet, Text,TextInput,View } from 'react-native';
import { StatusBar } from 'react-native';
import React,{ useState } from 'react';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from 'firebase/auth';



export default function Login() {
 const [email,setEmail] = useState('');
 const [password,setPassword] = useState('');
 const [loading,setLoading] = useState(false); 
 const auth = FIREBASE_AUTH;

const signIn = async () => {
    try {
        const response = await signInWithEmailAndPassword(auth,email,password);
        const user = response.user;
        console.log('Logged in with:', user.email);
    }
    catch (err:any){ console.log(err); 
        alert(err.message);}
    finally { setLoading(true)}
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
    FIREBASE_AUTH.signOut();
    
}

return (
      <View style={style.container}>
        <Text>Lamark</Text>
        <KeyboardAvoidingView behavior='padding'>
            <TextInput value={email} style={style.input} placeholder='EMAIL iD' autoCapitalize='none' />
            <TextInput secureTextEntry={true} value={email} style={style.input} placeholder='PASSWORD' autoCapitalize='none' />
            {
                loading ? <ActivityIndicator size="large" color="#0000f" /> :
                <>
                    <Button title="Login by me" onPress={signIn} />
                    <Button title="Register by clicking me" onPress={signUp} />
                </>
            }
            
        </KeyboardAvoidingView>
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