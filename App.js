import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Welcome to Little Lemon</Text>
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
    alignItems: "center",
    justifyContent: "center",
  },
});
