import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignUpScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.viewStyle}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        routeName="SignIn"
        text="Already have an account? Sign in instead!"
      />
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
