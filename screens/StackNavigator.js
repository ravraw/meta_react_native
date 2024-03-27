import React from "react";
import { StyleSheet, SafeAreaView, useColorScheme, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./WelcomeScreen";
import ProfileScreen from "./ProfileScreen";
import MenuItemsList from "../components/MenuItemsList";
import LoginScreen from "./LoginScreen";

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
          <Screen name="Menu" component={MenuItemsList} />
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
