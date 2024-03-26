import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Pressable,
  useWindowDimensions,
  useColorScheme,
} from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WelcomeScreen from "./screens/WelcomeScreen";
import MenuItemsList from "./components/MenuItemsList";
import FeedbackScreen from "./screens/FeedbackScreen";
import LoginScreen from "./screens/LoginScreen";
import {
  useDeviceOrientation,
  useAppState,
} from "@react-native-community/hooks";

const App = () => {
  // const { width, height, fontScale } = useWindowDimensions();
  // const orientation = useDeviceOrientation();
  // const deviceStatus = useAppState();
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colorScheme === "light" ? "#333333" : "#FFF" },
      ]}
    >
      <Header />
      {/* <FeedbackScreen /> */}
      {/* <LoginScreen /> */}
      <WelcomeScreen />
      {/* <MenuItemsList /> */}
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
