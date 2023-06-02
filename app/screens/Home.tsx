import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Home() {
    return (
        <View style={style.container}>
           <Text>Home</Text>
      </View>
    )
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