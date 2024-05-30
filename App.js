import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error))
      .finally(() => setloading(false));
  });

  return (
    <View style={styles.container}>
      <Text style={styles.titlebar}>Esto es la barra de título</Text>
      <ScrollView>
        {loading ? (
          <Text>Cargando...</Text>
        ) : (
          data.map((post) => (
            <View key={post.id}>
              <Text>{post.title}</Text>
              <Text>{post.body}</Text>
            </View>
          ))
        )}
      </ScrollView>
      <Text style={styles.navbar}>Esto es la barra de navegación</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
		height: 80,
		backgroundColor: '#f3242d',
		width: 360
	},
  titlebar: {
    backgroundColor: "#f0f9fd",
    width: 360,
    height: 90,
    paddingTop: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
  },
  body: {
    color: "#000",
    padding: 0,
    textAlign: "justify",
  },
});