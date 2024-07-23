import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "src/ui/models/Colors/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function ButtonLeave() {
  return (
    <TouchableOpacity style={styles.leaveContainer}>
      <Ionicons name="exit-outline" size={28} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  leaveContainer: {
    backgroundColor: Colors.Red,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
