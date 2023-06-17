import { ActivityIndicator, Button, StyleSheet, Text,TextInput,View ,TouchableOpacity,Image} from 'react-native';
import React,{ useState } from 'react';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { signInWithEmailAndPassword,createUserWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


GoogleSignin.configure(() => {
    webclientId:,
    offlineAddress:,
})



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

async function onGoogleButtonPress() {

    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return GoogleAuthProvider.credential(googleCredential);
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
                    <View style={style.bottomContent}>
                        <TouchableOpacity style={style.googleButton}>
                        <Image
                        style={style.googleIcon}
                        source={{
                            uri: "https://i.ibb.co/j82DCcR/search.png",
                        }}
                        />
                        <Text style={style.googleButtonText}>Sign in with Google</Text>
                        </TouchableOpacity>
                    </View>
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
    },
    bottomContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
       },
    mainText: {
        fontSize: 54,
        color: "white",
       },
       googleButton: {
        backgroundColor: "white",
        borderRadius: 4,
        paddingHorizontal: 34,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
       },
       googleButtonText: {
        marginLeft: 16,
        fontSize: 18,
        fontWeight: '600'
       },
       googleIcon: {
        height: 24,
        width: 24
       }
});