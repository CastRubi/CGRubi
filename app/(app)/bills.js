import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";

export default function Page() {
  const [gastos, setGastos] = useState([]);
  const [monto, setMonto] = useState('');
  const [motivo, setMotivo] = useState('');
  const [gastoEditado, setGastoEditado] = useState(null);
  const rememberToken = 'wId6bE1drw'; // Token del usuario

  useEffect(() => {
    obtenerTodosGastos();
  }, []);

  async function obtenerTodosGastos() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/v1/bills', {
        headers: {
          Authorization: `Bearer ${rememberToken}`,
        },
      });
      setGastos(response.data.data);
    } catch (error) {
      console.error('Error al obtener los gastos:', error);
    }
  }

  const agregarGasto = async () => {
    if (monto && motivo) {
      if (gastoEditado) {
        // Editar el gasto existente si hay uno seleccionado
        try {
          await axios.patch(`http://127.0.0.1:8000/api/v1/bills/${gastoEditado.id}`, {
            data: {
              attributes: {
                amount: monto,
                description: motivo,
              }
            }
          }, {
            headers: {
              Authorization: `Bearer ${rememberToken}`,
            },
          });
          setGastoEditado(null);
        } catch (error) {
          console.error('Error al editar el gasto:', error);
        }
      } else {
        // Agregar un nuevo gasto
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/v1/bills', {
            data: {
              attributes: {
                amount: monto,
                description: motivo,
              }
            }
          }, {
            headers: {
              Authorization: `Bearer ${rememberToken}`,
            },
          });
          setGastos([...gastos, response.data.data]);
        } catch (error) {
          console.error('Error al agregar el gasto:', error);
        }
      }
      setMonto('');
      setMotivo('');
      obtenerTodosGastos();
    }
  };

  const eliminarGasto = async id => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/v1/bills/${id}`, {
        headers: {
          Authorization: `Bearer ${rememberToken}`,
        },
      });
      obtenerTodosGastos();
    } catch (error) {
      console.error('Error al eliminar el gasto:', error);
    }
  };

  const editarGasto = gasto => {
    setGastoEditado(gasto);
    setMonto(gasto.attributes.amount);
    setMotivo(gasto.attributes.description);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titulo}>INGRESE EL MONTO Y MOTIVO DE GASTO:</Text>
      </View>
      <View style={styles.main}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.inputMonto]}
              placeholder="Monto Gasto"
              value={monto}
              keyboardType="numeric"
              onChangeText={setMonto}
            />
            <TextInput
              style={[styles.input, styles.inputMotivo]}
              placeholder="Motivo"
              value={motivo}
              onChangeText={setMotivo}
            />
          </View>

          <TouchableOpacity style={styles.botonAgregar} onPress={agregarGasto}>
            <Text style={styles.botonTexto}>{gastoEditado ? 'Editar Gasto' : 'Agregar Gasto'}</Text>
          </TouchableOpacity>

          {/* Lista de gastos */}
          {gastos.map(gasto => (
            <View key={gasto.id} style={styles.gastoItem}>
              <View style={styles.gastoInfo}>
                <Text style={styles.gastoTexto}>Motivo: {gasto.attributes.description}</Text>
                <Text style={styles.gastoTexto}>Monto: {gasto.attributes.amount}</Text>
              </View>
              <View style={styles.gastoBotones}>
                <TouchableOpacity
                  style={styles.botonEditarGasto}
                  onPress={() => editarGasto(gasto)}
                >
                  <Text style={styles.botonTexto}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.botonEliminar}
                  onPress={() => eliminarGasto(gasto.id)}
                >
                  <Text style={styles.botonTexto}>Eliminar</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
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
    marginBottom: 15,
    marginTop: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
  titulo: {
    fontSize: 18,
    marginTop: 10,
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
