import React from 'react'
import {TouchableOpacity,StyleSheet,Text, View} from 'react-native'
import { Colors } from "src/models/Colors/Colors";


export default function ButtonEarrings() {
  return (
    <TouchableOpacity  style={styles.earringsContainer}>
        <View style={styles.contNotification}>
            <Text style={styles.textNotification}>1</Text>
        </View>
        <Text  style={styles.textEarrings}>Entregas pendientes</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    earringsContainer:{
        backgroundColor:Colors.Blue2,
        width:110,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
        },
        textEarrings:{
        color:'white',
        fontSize:12,
        fontWeight:'600',
        flexWrap:'nowrap',
        textAlign:'center'
        },
        contNotification:{
            borderRadius:240,
            justifyContent:'center',
            alignItems:'center',
            height:12.5,
            width:12.5,
            backgroundColor:Colors.Red2,
            position:'absolute',
            bottom:30,
            left:100
        },
        textNotification:{
        color:'white',
        fontSize:8,
        fontWeight:'bold'
        }
    })


