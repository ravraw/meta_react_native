import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";

const KeyboardAvoidingElement = ({ children }) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
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
