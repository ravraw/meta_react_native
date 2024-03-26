import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Pressable,
} from "react-native";

const WelcomeScreen = () => {
  return (
    <View indicatorStyle="white" style={styles.container}>
      {/* <View style={styles.container}> */}
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../assets/images/backgroundImage.png")}
      >
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>
            Little Lemon, Your local Mediterranean Bistro
          </Text>
          <Pressable
            onPress={() => navigation.navigation("Menu")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Menu</Text>
          </Pressable>
        </View>
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
  contentWrapper: {
    marginTop: 50,
    width: "100%",
    alignItems: "center",
  },
  title: {
    paddingVertical: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    width: "50%",
    alignSelf: "center",
  },
  button: {
    width: 100,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 175,
    backgroundColor: "#4c6258",
    borderColor: "#EDEFEE",
    // borderWidth: 2,
    borderRadius: 12,
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 18,
  },
});

export default WelcomeScreen;
