import React from "react";
import { StyleSheet, View, Text,TextInput } from "react-native";
import { Slot } from "expo-router";
import Header from "../../components/header";
import Tabs from "../../components/tabs";
import { useEffect, useState } from 'react';

export default function HomeLayout() {
 
  
  return (
    <>
       <View style={styles.container}>
        <Header/>
        <Slot />
        <Tabs/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,//utiliza todo el espacio
  

  },
 
 

});


