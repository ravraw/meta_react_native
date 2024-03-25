import React, { useState } from "react";

import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <ScrollView
      style={styles.container}
      //  keyboardDismissMode="on-drag"
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "padding"}
        paddingBottom={Platform.OS === "ios" ? 100 : 0}
      >
        <Text style={styles.headingSection}>
          {" "}
          How was your visit to Little Lemon?{" "}
        </Text>
        <Text style={styles.infoSection}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear your experience with us!
        </Text>
        <View>
          <TextInput
            value={name}
            placeholder="Name"
            onChangeText={setName}
            style={styles.nameEmailInput}
          />
          <TextInput
            value={email}
            placeholder="Email"
            onChangeText={setEmail}
            style={styles.nameEmailInput}
          />
          <TextInput
            value={message}
            placeholder="Message"
            onChangeText={setMessage}
            style={styles.messageInput}
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
  headingSection: {
    fontSize: 28,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
  nameEmailInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#EDEFEE",
    backgroundColor: "#F4CE14",
  },
  messageInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#F4CE14",
  },
  inputContainer: {},
});

export default FeedbackForm;
