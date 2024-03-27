import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MenuItemsList from "../screens/MenuItemsList";
import LoginScreen from "../screens/LoginScreen";
const { Navigator, Screen } = createNativeStackNavigator();

const StackNavigator = () => {
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
  </NavigationContainer>;
};
