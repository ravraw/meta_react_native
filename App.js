import React, { useState } from "react";
import { StyleSheet, SafeAreaView, useColorScheme, View } from "react-native";
import {
  useDeviceOrientation,
  useAppState,
} from "@react-native-community/hooks";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./screens/TabNavigator";
import WelcomeScreen from "./screens/WelcomeScreen";
import StackNavigator from "./screens/StackNavigator";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const colorScheme = useColorScheme();
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <View style={styles.container}>
      {/* <Header /> */}
      {/* <StackNavigator /> */}
      <TabNavigator />
      {/* <Footer /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
