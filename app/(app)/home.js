import { StyleSheet, Text, View, TextInput } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    // Lo que en la pagina principal se refleja
    <View style={styles.container}>
     
      {/* Contenedor donde se mostrará la pantalla inicial */}
      <View style={styles.main}>
     
        <Text style={styles.titulo}>BIENVENIDO A SPEND-WISE.</Text>
        <Text style={styles.text2}>TUS INGRESOS SON: </Text>
        <TextInput
          style={styles.containers}
          editable={false} // Establece el cuadro de texto como de solo lectura
        />
        <Text style={styles.text3}>HAS GASTADO: </Text>
        {/* Contenedor donde se mostrarán los gastos */}
        <TextInput
          style={styles.containers}
          editable={false} // Establece el cuadro de texto como de solo lectura    
        />
        <Text style={styles.text4}>TU SALDO TOTAL ES: </Text>
        <TextInput
          style={styles.containers1}
          editable={false} // Establece el cuadro de texto como de solo lectura
        />
      </View>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // utiliza todo el espacio
    // flexDirection: "row",
  },
  main: {
    flex: 6,
    backgroundColor: "#ffffff",
    padding: 25,
    alignItems: 'center', // Centra horizontalmente
    maxWidth: 960,
  },
  text2: {
    color: 'black',
    fontWeight: "800",
    fontSize: 15,
    padding: 30,
  },
  text3: {
    color: 'black',
    fontWeight: "800",
    fontSize: 15,
    padding: 20,
  },
  text4: {
    color: 'black',
    fontWeight: "800",
    fontSize: 16,
    padding: 30,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 15,
  },
  containers: {
    width: '80%', // Ajusta el ancho del contenedor según sea necesario
    padding: 10,
    borderWidth: 2, // Borde alrededor del contenedor
    borderColor: '#0a527b', // Color del borde
    borderRadius: 20, // Bordes redondeados
    textAlign: "center",
    color: "black",
  },
  containers1: {
    width: '70%', // Ajusta el ancho del contenedor según sea necesario
    padding: 100,
    backgroundColor: '#d3ebf4',
    borderWidth: 2, // Borde alrededor del contenedor
    borderColor: '#d3ebf4', // Color del borde
    borderRadius: 200, // Bordes redondeados
    textAlign: "center",
    color: "#0e3d50",
    fontSize: 20,
  },
});
