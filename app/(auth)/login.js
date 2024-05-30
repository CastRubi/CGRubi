import React, { useState,useEffect } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image } from "react-native";
import { Link, Redirect } from "expo-router";
import axios from "axios";
import icon from '../../assets/icon.png';

export default function Page() {
    const [error, setError] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


 async function httpRequest() {
    
  await axios
     .post(
        "http://127.0.0.1:8000/api/v1/anctum/login",
       {
         email: email,
         password: password,
         device_name: "Rubi",
      },
        {
           headers: {
             Accept: "application/vnd.api+json",
           },
         }
       )
       .then((response) => {
         console.log(response.data);
       })
       .catch((error) => {
         console.log(error.response.data);
         setError(error.response.data.errors.email)
       });
   }
   return (
    <ImageBackground
    source={{ uri: 'https://png.pngtree.com/thumb_back/fh260/background/20230818/pngtree-sunrise-mountain-scenery-wallpaper-desktop-for-pc-and-mobile-image_13040555.jpg' }} // Replace with your background image URL
    style={styles.background}
>  
        <View style={styles.overlay}>
            <View style={styles.container}>
           
            <Image source={icon} style={styles.logo}/>
                <Text style={styles.Title}>¡Bienvenido!</Text>
                <Text style={styles.subtitle}>Por favor ingrese sus credenciales</Text>
                <TextInput
                    value={email}
                    style={styles.input}
                    placeholder="Correo electrónico"
                    placeholderTextColor="#bbb"
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    value={password}
                    style={styles.input}
                    placeholder="Contraseña"
                    placeholderTextColor="#bbb"
                    onChangeText={setPassword}
                  
                />
                <TouchableOpacity style={styles.button} onPress={httpRequest}>
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>
                <Text style={styles.Text}>¿No tienes una cuenta?</Text>
                <Link href="/registration" style={styles.linkText}>
                   Registrate aqui 
                </Link>
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
Title: {
    marginTop: 15,
    fontSize: 30,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 10,
},
subtitle: {
    marginTop: 12,
    marginBottom: 30,
    fontSize: 16,
    color: "black",
    textAlign: "center",
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
    fontSize: 18,
},
button: {
    
    backgroundColor: '#0078d7', // Windows blue
    paddingVertical: 10,
    borderRadius: 5,
    width: '65%',
    alignItems: 'center',
    marginVertical: 15,
   
    
},
buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    
},
Text: {
    marginTop: 130,
    color: 'black',
    fontSize: 20,
},
linkText: {
    color: '#0078d7',
    fontSize: 20,
},

});