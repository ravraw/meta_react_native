import React, { useState } from "react";
import { StyleSheet, SafeAreaView, useColorScheme, View } from "react-native";
import {
  useDeviceOrientation,
  useAppState,
} from "@react-native-community/hooks";
import TabNavigator from "./screens/TabNavigator";

const App = () => {
  const colorScheme = useColorScheme();
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <View style={styles.container}>
      <TabNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
