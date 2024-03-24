import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text>Welcome to Little Lemon</Text>
      <Footer />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
    backgroundColor: "#4c6258",
  },
});

export default App;
