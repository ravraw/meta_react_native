import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Keyboard,
  Platform,
} from "react-native";

const KeyboardAvoidingElement = ({ children }) => {
  // const [keyboardHeight, setKeyboardHeight] = useState(0);

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
      {children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
  },
});

export default KeyboardAvoidingElement;
