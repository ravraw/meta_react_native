import React, { useState } from "react";
import { StyleSheet, useColorScheme, View } from "react-native";
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
