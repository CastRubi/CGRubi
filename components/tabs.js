import { StyleSheet, View, SafeAreaView } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Tabs() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.shadow}>
        <View style={styles.tabs}>
          <Link href="/incomes" style={styles.tab_link}>
            Ingresos
          </Link>
          <Link href="/home" style={styles.tab_link}>
            Home
          </Link>
          <Link href="/bills" style={styles.tab_link}>
            Gastos
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 25,
    paddingVertical: 25,
    position: "absolute", // Fija la posición del contenedor
    bottom: 0, // Coloca el contenedor en la parte inferior de la pantalla
  },
  shadow: {
    // borderRadius: 30,
    // shadowOffset: { width: 40, height: 40 },
    // shadowColor: "#784aed",
    // shadowOpacity: 1,
    // elevation: 5,
    // backgroundColor: "#0000",
    // padding: 1,
  },
  tabs: {
    backgroundColor: "#0a527b",
    flexDirection: "row",
    borderRadius: 15,
    justifyContent: "space-around",
  },
  tab_link: {
    color: "#ffffff",
    fontWeight: "400",
    fontSize: 15,
    padding: 20,
  },
});
