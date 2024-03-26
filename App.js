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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

const App = () => {
  // const { width, height, fontScale } = useWindowDimensions();
  // const orientation = useDeviceOrientation();
  // const deviceStatus = useAppState();
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer>
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: colorScheme === "light" ? "#333333" : "#FFF" },
        ]}
      >
        <Header />
        <Navigator initialRouteName="Welcome">
          <Screen name="Welcome" component={WelcomeScreen} />
          <Screen name="Menu" component={MenuItemsList} />
          {/* <FeedbackScreen /> */}
          {/* <LoginScreen /> */}
          {/* <WelcomeScreen /> */}
          {/* <MenuItemsList /> */}
          {/* <StatusBar style="auto" /> */}
        </Navigator>
        <Footer />
      </SafeAreaView>
    </NavigationContainer>
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
