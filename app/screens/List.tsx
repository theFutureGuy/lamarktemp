import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React,{useEffect, useState} from 'react';
import { FIREBASE_DB } from '../../firebaseConfig';
import { Firestore, Timestamp, addDoc, collection, onSnapshot } from 'firebase/firestore';





const List = ({navigation} : any) => {

    const [temps,setTemps] = useState<any[]>([1,2,3,4]);
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
                //setTemps(temps);
            },
        })
        setTemp('23')
        return () => subscriber();
    },[]);

    const addTemp = async () => {
        const doc = addDoc(collection(FIREBASE_DB,'temps'),{"title":temp,"done":'False'});
        setTemp('');
        console.log("printing ...",doc)
       // console.log(temps)
    }


    /*const renderTemps = async (item:any) => {
        const toggleDone = async() => {}
        const deleteTemp = async() => {}


        // console.log("Temps : ",item)
        return <View>
                <TouchableOpacity  />
                    <Text>{ {item.title} }</Text>
               </View>
        
    }*/

  return (
    <View style={styles.container}>
      <Text>List</Text>
        <View style={styles.form} >
            {/* <Button onPress={ () =>navigation.navigate('Details')} title='Open Details' /> */}
            {/* <Button onPress={ () => addTemp()} title="Add Temperature" /> */}
            <Text style={styles.input}>{temp}</Text> 
            <Button onPress={addTemp} title="Add Temperature" disabled={temp === ''} />
        </View>
        <View>
        <Text>{temp}</Text>
        {  temps.length > 0 && 
            <View>
            <FlatList data={temps} renderItem={(temps) => <Text>{temps.item}</Text>} keyExtractor={(temps) => temps.id} />
            </View>
        }
        </View>

           
    </View>
  )
}

export default List;

const styles = StyleSheet.create({

container:{
    marginHorizontal:20,
    flex:1,
    justifyContent:'center'
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

})