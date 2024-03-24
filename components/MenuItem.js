import React from "react";
import { Text, StyleSheet, View } from "react-native";

const MenuItem = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    padding: 10,
    margin: 5,
    backgroundColor: "#fff",
  },
});

export default MenuItem;
