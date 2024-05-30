import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import Header from "../../components/header";

export default function _layout() { 
  return (
    <>
       <View style={styles.container}>
        <Slot />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,//utiliza todo el espacio
    backgroundColor: "#0a527b",

  },
});


