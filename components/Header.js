const { View, StyleSheet, Text } = require("react-native");

const Header = () => (
  <View style={styles.wrapper}>
    <Text>Little Lemon</Text>
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

export default Header;
