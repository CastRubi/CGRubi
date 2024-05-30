import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import axios from 'axios';

export default function Page() {
  const [ingresos, setIngresos] = useState([]);
  const [montoIngreso, setMontoIngreso] = useState('');
  
  const agregarIngreso = () => {
    if (montoIngreso) {
      setIngresos([...ingresos, { key: Math.random().toString(), monto: montoIngreso }]);
      setMontoIngreso('');
    }
  };

  return (
    <View style={styles.container} >
      <View style={styles.main}>
            <View style={styles.titleContainer}>
        <Text style={styles.titulo}>INGRESE EL MONTO A INGRESAR:</Text>
      </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.inputMonto]}
              placeholder="Monto Ingreso"
              value={montoIngreso}
              keyboardType="numeric"
              onChangeText={setMontoIngreso}
            />
          </View>
            <TouchableOpacity style={styles.botonAgregar} onPress={agregarIngreso}>
              <Text style={styles.botonTexto}>Agregar Ingreso</Text>
            </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  titleContainer: {
    marginBottom:15,
    marginTop:20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
  titulo: {
    fontSize: 18,
    marginTop:10,
    fontWeight: "bold",
    color: '#0a527b',
  },
  main: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#0a527b',
    borderRadius: 5,
    textAlign: "center",
    color: "black",
  },
  inputMonto: {
    marginRight: 10,
  },
  inputMotivo: {},
  botonAgregar: {
    backgroundColor: '#0a527b',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  botonEditar2: {
    backgroundColor: '#008000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  botonTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  gastoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#d3ebf4',
    borderRadius: 5,
    backgroundColor: '#f0f8ff',
    marginHorizontal: 20,
  },
  gastoInfo: {
    flex: 1,
  },
  gastoTexto: {
    color: 'black',
  },
  gastoBotones: {
    flexDirection: 'row',
  },
  botonEditarGasto: {
    backgroundColor: '#ff9900',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  botonEliminar: {
    backgroundColor: '#ff4d4d',
    padding: 10,
    borderRadius: 5,
  },
});
