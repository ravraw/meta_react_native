import React from "react";
import { Text, StyleSheet, View } from "react-native";

const MenuItem = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    margin: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  text: {
    width: "100%",
  },
});

export default MenuItem;
