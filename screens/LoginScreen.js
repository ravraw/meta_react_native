import React, { useState, useEffect } from "react";
import { TextInput, Text, StyleSheet, View } from "react-native";
import KeyboardAvoidingElement from "../components/KeyboardAvoidingElement";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <KeyboardAvoidingElement>
      <View style={styles.headingContainer}>
        <Text style={styles.headerText}>Welcome</Text>
        <Text style={styles.headerText}>to</Text>
        <Text style={styles.headerText}>Little Lemon</Text>
      </View>
      <View>
        <Text style={styles.regularText}>Login to continue </Text>
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
      </View>
    </KeyboardAvoidingElement>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    padding: 20,
    justifyContent: "flex-start",
    marginBottom: 20,
  },
  formContainer: {
    justifyContent: "flex-start",
  },
  headerText: {
    fontSize: 24,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 18,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  username: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#EDEFEE",
    backgroundColor: "#F4CE14",
  },
  password: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#EDEFEE",
    backgroundColor: "#F4CE14",
  },
});

export default LoginScreen;
