import React, { useState } from "react";
import { StyleSheet, SafeAreaView, useColorScheme, View } from "react-native";
import {
  useDeviceOrientation,
  useAppState,
} from "@react-native-community/hooks";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./screens/TabNavigator";

const App = () => {
  const colorScheme = useColorScheme();
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: colorScheme === "light" ? "#FFF" : "#333333" },
        ]}
      >
        <TabNavigator />
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
