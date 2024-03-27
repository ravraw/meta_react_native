import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./WelcomeScreen";
import ProfileScreen from "./ProfileScreen";
import MenuItemsList from "../components/MenuItemsList";
import LoginScreen from "./LoginScreen";
import FeedbackScreen from "./FeedbackScreen";
const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigator = () => {
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
    ;
  </NavigationContainer>;
};

export default TabNavigator;
