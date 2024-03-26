import React, { useState } from "react";
import { TextInput, Text, StyleSheet, View, Pressable } from "react-native";
import KeyboardAvoidingElement from "../components/KeyboardAvoidingElement";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <KeyboardAvoidingElement>
      <View style={styles.formContainer}>
        <Text style={styles.regularText}>
          {!loggedIn ? "Login to continue" : "You are logged in!"}{" "}
        </Text>
        {!loggedIn && (
          <>
            <TextInput
              value={username}
              onChangeText={setUsername}
              placeholder="email / username"
              maxLength={50}
              keyboardType="email-address"
              style={styles.username}
              clearButtonMode="always"
            />
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              maxLength={14}
              keyboardType={"default"}
              secureTextEntry={true}
              style={styles.password}
              clearButtonMode="always"
            />
            <Pressable
              style={styles.button}
              onPress={() => {
                setLoggedIn(!loggedIn);
              }}
            >
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
          </>
        )}
      </View>
    </KeyboardAvoidingElement>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "red",
  },
  regularText: {
    fontSize: 18,
    padding: 20,
    color: "#4c6258",
    textAlign: "center",
  },
  username: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#EDEFEE",
    backgroundColor: "#F4CE14",
    borderRadius: 5,
  },
  password: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#EDEFEE",
    backgroundColor: "#F4CE14",
    borderRadius: 5,
  },
  button: {
    alignSelf: "center",
    padding: 10,
    marginVertical: 8,
    width: "50%",
    backgroundColor: "#4c6258",
    borderColor: "#EDEFEE",
    borderWidth: 2,
    borderRadius: 12,
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 18,
  },
});

export default LoginScreen;
