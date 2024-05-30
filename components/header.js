import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spend Wise</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    width: "100%",
    backgroundColor: "#0a527b",
    justifyContent: "center",
    paddingTop: 20,
  
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "600",
    paddingBottom: 30,
    paddingLeft: 25, // Agrega espacio a la izquierda
    
  },
});