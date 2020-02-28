import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const SignUpScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.TextStyle}>SignUpScreen</Text>
      <Button
        title="Go to Signin"
        onPress={() => navigation.navigate("SignIn")}
      />
    </>
  );
};

const styles = StyleSheet.create({
  TextStyle: {
    fontSize: 48
  }
});

export default SignUpScreen;
