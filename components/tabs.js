import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { Link } from 'expo-router'

export default class tabs extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.shadow}>
                    <View style={styles.tabs}>
                        <Link href='/incomes' style={styles.tabs_link}>
                             Ingresos
                             </Link>
                        <Link href='/' style={styles.tabs_link}>
                             Home
                             </Link>
                        <Link href='/bills' style={styles.tabs_link}>
                             Gastos
                             </Link>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container:{
        zIndex: 2,
        width:"100%",
        justifyContent: "center,",
        paddingHorizontal: 25,
        paddingVertical: 25,
        
        },
        tabs:{
            flexDirection:"row",
            borderRadius:30,
            justifyContent:"space-around",
            backgroundColor:"#784aed",
        },
        
        tabs_link:{
            color:"#fffff",
            fontWeight:"400",
            fontSize: 14,
            padding:20,

        }
})

