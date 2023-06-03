import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React,{useEffect, useState} from 'react';
import { FIREBASE_DB,FIREBASE_AUTH } from '../../firebaseConfig';
import { doc, Timestamp, addDoc, collection, onSnapshot } from 'firebase/firestore';
import { NavigationProp } from '@react-navigation/native';
interface RouterProps{
    navigation:NavigationProp<any,any>;
}



const List = ({navigation} : any) => {

    const [temps,setTemps] = useState<any[]>([]);
    const [temp,setTemp] = useState('');

    useEffect(() => {
        const tempsRef = collection(FIREBASE_DB,'temps');
        const subscriber = onSnapshot(tempsRef, {
            next : (snapshot) => {
                console.log("added now")
                const temps: any[] = [];
                snapshot.docs.forEach(doc => {
                    // console.log(doc.data);
                    temps.push({
                        id:doc.id,
                        ...doc.data(),
                    });
                })
                setTemps(temps);
            },
        })

        return () => subscriber();
    },[]);

    const addTemp = async () => {
        const doc = addDoc(collection(FIREBASE_DB,'temps'),{title:temp,done:false,created: Timestamp.now });
        setTemp('');
        console.log("printing ...",doc)
    }
    const renderTemps = async (item:any) => {
       //const ref = doc(FIREBASE_DB,`temp/${item.id}`)
        // const deleteTemp = async() => {deleteDoc(ref)}

        // console.log("Temps : ",item)
        return <View style={styles.tempContainer}>
                  <Text style={styles.tempText}>{item.title}</Text>
               </View>
        
    }

  return (
    <View style={styles.container}>
      <Text>List</Text>
        <View style={styles.form} >
            {/* <Button onPress={ () =>navigation.navigate('Details')} title='Open Details' /> */}
            {/* <Button onPress={ () => addTemp()} title="Add Temperature" /> */}
            <Text style={styles.input}>34</Text>
            <Button onPress={addTemp} title="Add Temperature" disabled={temp === ''} />
        </View>
        <View>
        {  temps.length > 0 && ():{}
        <View>
            <FlatList data={temps} renderItem={(item) => renderTemps(item)} keyExtractor={(temp) />=> temp.id} />
        }
        <Button onPress={() => navigation.navigate('details')} title="Details Page" />
        <Button onPress={() => FIREBASE_AUTH.signOut()} title="Logout" />
        </View>

    </View>
    </View>
  )
}

export default List;

const styles = StyleSheet.create({

container:{
    marginHorizontal:20,
},
form:{
    flexDirection:'row',
    alignItems:'center',
},
input:{
    flex:1,
    borderWidth:1,
    height:40, 
    borderRadius:7,
},
tempContainer:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#fff',
    padding:10,
    marginVertical:4,
},
tempText:{
    flex:1,
    paddingHorizontal:4,
},
})

