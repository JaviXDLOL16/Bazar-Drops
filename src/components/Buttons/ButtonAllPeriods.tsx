import React from 'react'
import {TouchableOpacity,StyleSheet,Text, View} from 'react-native'
import { Colors } from "src/models/Colors/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function ButtonAllPeriods() {
  return (
    <TouchableOpacity style={styles.containerPeriods}>
        <Text style={styles.textPeriods}>Ver todos los periodos de venta</Text>
        <Ionicons name="grid" size={28} color="white" />
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    containerPeriods: {
    backgroundColor:Colors.Gray,
    flexDirection: "row",
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
    
    },
    textPeriods:{
    color:'white', 
    fontSize:16,
    marginLeft:35,
    marginRight:35
    }
  });