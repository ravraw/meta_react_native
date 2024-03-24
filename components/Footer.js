const { View, StyleSheet, Text } = require("react-native");

const Footer = () => (
  <View style={styles.wrapper}>
    <Text>All rights reserved by Little Lemon @2024</Text>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    backgroundColor: "#F4CE14",
  },
});

export default Footer;
