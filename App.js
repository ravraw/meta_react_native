import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Pressable,
  useWindowDimensions,
  useColorScheme,
  View,
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
          { backgroundColor: colorScheme === "light" ? "#FFF" : "#333333" },
        ]}
      >
        {/* <View style={styles.container}> */}
        <Header />
        <Navigator
          initialRouteName="Login"
          // screenOptions={{
          //   headerStyle: { backgroundColor: "#FBDABB" },
          // }}
        >
          <Screen
            options={{ title: "Home" }}
            name="Welcome"
            component={WelcomeScreen}
          />
          <Screen name="Menu" component={MenuItemsList} />
          <Screen name="Login" component={LoginScreen} />
          <Screen name="Feedback" component={FeedbackScreen} />
        </Navigator>
        {/* </View> */}
        <Footer />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
