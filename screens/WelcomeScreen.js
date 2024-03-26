import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";

const WelcomeScreen = () => {
  return (
    <View indicatorStyle="white" style={styles.container}>
      {/* <View style={styles.container}> */}
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../assets/images/backgroundImage.png")}
      >
        <Text style={styles.title}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </ImageBackground>
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "contain",
  },
  title: {
    marginTop: 16,
    paddingVertical: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    width: "50%",
    alignSelf: "center",
  },
});

export default WelcomeScreen;
