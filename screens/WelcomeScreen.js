import { View, Text, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Welcome to Little Lemon</Text>
      <View>
        <Text style={styles.h2}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
  h1: {
    color: "#F4CE14",
    fontSize: 24,
  },
  h2: { color: "#FFF", fontSize: 16 },
});

export default WelcomeScreen;
