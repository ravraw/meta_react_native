const { View, StyleSheet, Text } = require("react-native");

const Header = () => (
  <View style={styles.wrapper}>
    <Text>Little Lemon</Text>
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

export default Header;
