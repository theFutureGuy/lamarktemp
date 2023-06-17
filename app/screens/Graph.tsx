import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React,{useEffect, useState} from 'react';
import { FIREBASE_DB } from '../../firebaseConfig';
import { Firestore, Timestamp, addDoc, collection, onSnapshot } from 'firebase/firestore';


export default function({navigation}){
    return(
        <div>
            <h1>Graph.....</h1>
            <Button title='Go back' onPress={navigation.goBack()} />
        </div>
    )
}