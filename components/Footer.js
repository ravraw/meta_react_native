const { View, StyleSheet, Text } = require("react-native");

const Footer = () => (
  <View style={styles.wrapper}>
    <Text style={styles.content}>
      All rights reserved by Little Lemon @2024
    </Text>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 0.05,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#FFF",
  },
  content: {
    fontSize: 12,
  },
});

export default Footer;
