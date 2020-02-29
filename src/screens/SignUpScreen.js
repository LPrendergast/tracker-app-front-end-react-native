import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SignUpScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(state);
  return (
    <View style={styles.viewStyle}>
      <Spacer>
        <Text h3 style={{ color: "white" }}>
          Sign Up for Tracker
        </Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        type="email"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        secureTextEntry={true}
        autoCorrect={false}
      />
      {state.errorMessage ? (
        <Text style={styles.errorStyle}>{state.errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title="Create Account"
          raised
          buttonStyle={{ backgroundColor: "#ffaaa5" }}
          onPress={() => signup({ email, password })}
        />
      </Spacer>
      <Button
        title="Already made an account? Tap here to sign in."
        onPress={() => navigation.navigate("SignIn")}
        type="clear"
      >
        <Text>Already made an account? Click here to sign in.</Text>
      </Button>
    </View>
  );
};

SignUpScreen.navigationOptions = () => {
  return {
    headerShown: false,
    cardStyle: {
      backgroundColor: "#a8e6cf"
    }
  };
};

const styles = StyleSheet.create({
  viewStyle: {
    borderColor: "red",
    borderRadius: 2,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 250
  },
  errorStyle: {
    color: "red",
    marginTop: 15
  }
});

export default SignUpScreen;
