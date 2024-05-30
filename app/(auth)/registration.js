
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity,ImageBackground,Image } from "react-native";
import { Link, Redirect } from "expo-router";
import icon from '../../assets/icon.png';

export default function Page() {
   ;
    const [user, setUser] = useState(false);

    const handleLogin = () => {
        setUser(false);
    };

    if (user) {
        return <Redirect href="/home" />;
    }

    return (
        <ImageBackground
        source={{ uri: 'https://png.pngtree.com/thumb_back/fh260/background/20230818/pngtree-sunrise-mountain-scenery-wallpaper-desktop-for-pc-and-mobile-image_13040555.jpg' }} // Replace with your background image URL
        style={styles.background}
    >  
            <View style={styles.overlay}>
                <View style={styles.container}>
               
                <Image source={icon} style={styles.logo}/>

                    <Text style={styles.subtitle}>Registrate</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre"
                        placeholderTextColor="#bbb"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                     <TextInput
                        style={styles.input}
                        placeholder="Correo electrónico"
                        placeholderTextColor="#bbb"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                     <TextInput
                        style={styles.input}
                        placeholder="Contraseña"
                        placeholderTextColor="#bbb"
                        secureTextEntry
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder="Confirma tu contraseña"
                        placeholderTextColor="#bbb"
                        secureTextEntry
                    />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ImageBackground>
    );
    }
    
    const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for contrast
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 90, // ajusta el tamaño según lo necesites
        height: 90, // ajusta el tamaño según lo necesites
       marginTop:10,
       borderRadius: 100,
      },
    container: {
        width: '90%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 10,
        padding: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
    },
    
    subtitle: {
        marginBottom: 30,
        fontSize: 28,
        color: "black",
        textAlign: "center",
        marginTop:25,
        fontWeight: 'bold',
      },
    input: {
        marginTop: 20,
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 15,
        marginBottom: 20,
        backgroundColor: '#f5f5f5',
        color: '#333',
        fontSize: 20,
    },
    button: {
        backgroundColor: '#0078d7', // Windows blue
        paddingVertical: 10,
        borderRadius: 5,
        width: '70%',
        alignItems: 'center',
        marginVertical: 15,
        marginTop:30,
        
    },
    buttonText: {
        color: '#fff',
        fontSize: 21,
        fontWeight: 'bold',
        
    },

    
    });