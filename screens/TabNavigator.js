import React from "react";
import { StyleSheet, SafeAreaView, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./WelcomeScreen";
import ProfileScreen from "./ProfileScreen";
import MenuScreen from "./MenuScreen";
import { Ionicons } from "@expo/vector-icons";
const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigator = () => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colorScheme === "light" ? "#FFF" : "#333333" },
      ]}
    >
      <NavigationContainer>
        <Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Welcome") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Menu") {
                iconName = focused ? "menu" : "menu-outline";
              } else if (route.name === "Profile") {
                iconName = focused ? "person" : "person-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#4c6258",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Screen
            options={{ title: "Home" }}
            name="Welcome"
            component={WelcomeScreen}
          />
          <Screen name="Menu" component={MenuScreen} />
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

export default TabNavigator;
