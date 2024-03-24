import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WelcomeScreen from "./screens/WelcomeScreen";
import MenuItemsList from "./components/MenuItemsList";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {/* <WelcomeScreen /> */}
      <MenuItemsList />
      <Footer />
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#4c6258",
    paddingTop: StatusBar.currentHeight,
  },
});

export default App;
