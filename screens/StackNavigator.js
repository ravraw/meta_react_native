import React from "react";
import { StyleSheet, SafeAreaView, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./WelcomeScreen";
import ProfileScreen from "./ProfileScreen";
import MenuScreen from "./MenuScreen";
import LoginScreen from "./LoginScreen";
import FeedbackScreen from "./FeedbackScreen";

const { Navigator, Screen } = createNativeStackNavigator();

const StackNavigator = () => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colorScheme === "light" ? "#FFF" : "#333333" },
      ]}
    >
      <NavigationContainer>
        <Navigator>
          <Screen
            options={{ title: "Home" }}
            name="Welcome"
            component={WelcomeScreen}
          />
          <Screen name="Menu" component={MenuScreen} />
          <Screen name="Login" component={LoginScreen} />
          <Screen name="Feedback" component={FeedbackScreen} />
          <Screen name="Profile" component={ProfileScreen} />
        </Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default StackNavigator;
