import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
//Lo que en la pagina principal se refleja
    <View style={styles.container}>
       <View style={styles.header}> 
       </View>
      
      <View style={styles.main}>
      <Text style={styles.Titulo}>Spend-Wise</Text>
      </View>
      <View style={styles.tabs}>
        <Text style={styles.text}>home</Text>
        <Text style={styles.text}>Ingresos</Text>
        <Text style={styles.text}>Gastos</Text>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,//utiliza todo el espacio
   //flexDirection:"row",
    backgroundColor: 'green',//pinta el contenedor
    
  },
  header:{
    flex:1, 
    backgroundColor: "#1d7750",
  },
  main:{
    flex:6, 
    backgroundColor: "#ffffff",
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",

  },
  tabs:{
    flex:1, 
    backgroundColor: "#1d7750",
    flexDirection:"row",
    justifyContent: 'space-evenly',
    alignItems:"center",
  },
  text:{
    color: "#ffffff",
    fontSize: 18,
  },
  Titulo:{
      fontSize: 48,
      fontWeight: "bold",
    }

});
