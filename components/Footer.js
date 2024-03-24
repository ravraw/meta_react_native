const { View, StyleSheet, Text } = require("react-native");

const Footer = () => (
  <View style={styles.wrapper}>
    <Text>All rights reserved by Little Lemon @2024</Text>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#F4CE14",
    borderColor: "blue",
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    width: "100%",
  },
});

export default Footer;
