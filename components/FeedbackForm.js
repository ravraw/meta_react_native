import React, { useState, useEffect } from "react";

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
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const [keyboardHeight, setKeyboardHeight] = useState(0);

  // Not being used
  // useEffect(() => {
  //   const showSubscription = Keyboard.addListener(
  //     "keyboardDidShow",
  //     ({ endCoordinates }) => setKeyboardHeight(endCoordinates.height)
  //   );
  //   const hideSubscription = Keyboard.addListener("keyboardDidHide", () =>
  //     setKeyboardHeight(0)
  //   );

  //   return () => {
  //     showSubscription.remove();
  //     hideSubscription.remove();
  //   };
  // }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      // keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <ScrollView style={styles.container} keyboardDismissMode="on-drag">
        <Text style={styles.headingSection}>
          How was your visit to Little Lemon?
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
            maxLength={50}
          />
          <TextInput
            value={email}
            placeholder="Email"
            onChangeText={setEmail}
            style={styles.nameEmailInput}
            maxLength={50}
            keyboardType={"email-address"}
          />
          <TextInput
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder={"Phone Number"}
            style={styles.phoneNumberInput}
            keyboardType={"phone-pad"}
          />
          <TextInput
            value={message}
            placeholder="Message"
            onChangeText={setMessage}
            style={styles.messageInput}
            multiline={true}
            maxLength={500}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
  phoneNumberInput: {
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
