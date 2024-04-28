import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot } from "expo-router";
import Tabs from "../components/tabs";

const layout = () => {
  return (
    <>
    <View style={styles.container}>
      <View style={styles.main}>
        <Slot/>
        
         </View>
         <Tabs style={styles.tabs}/>
    </View>
    </>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
},
main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
tabs: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
},
})