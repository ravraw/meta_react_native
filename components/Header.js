const { View, StyleSheet, Text } = require("react-native");

const Header = () => (
  <View style={styles.wrapper}>
    <Text style={styles.content}>Little Lemon</Text>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#F4CE14",
  },
  content: {
    fontSize: 36,
    fontWeight: "bold",
  },
});

export default Header;
