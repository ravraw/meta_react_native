import React from "react";
import { Text, StyleSheet, View } from "react-native";

const MenuItem = ({ name, price }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    padding: 10,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "90%",
  },
});

export default MenuItem;
