import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const SignInScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.TextStyle}>SignUpScreen</Text>
      <Button
        title="Go to Sign Up"
        onPress={() => navigation.navigate("SignUp")}
      />
      <Button
        title="Go to Main Flow"
        onPress={() => navigation.navigate("mainFlow")}
      />
    </>
  );
};

const styles = StyleSheet.create({
  TextStyle: {
    fontSize: 48
  }
});

export default SignInScreen;
