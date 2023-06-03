import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React,{useEffect, useState} from 'react';
import { FIREBASE_DB } from '../../firebaseConfig';
import { Firestore, Timestamp, addDoc, collection, onSnapshot } from 'firebase/firestore';





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
        const toggleDone = async() => {}
        const deleteTemp = async() => {}


        // console.log("Temps : ",item)
        return <View>
                <TouchableOpacity onPress={} />
                    <Text>{/* {item.title} */}</Text>
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
        {  temps.length > 0 && (
            <View>
            <FlatList data={temps} renderItem={(item) => renderTemps(item)} keyExtractor={(temp) => temp.id} />
        }
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

})

