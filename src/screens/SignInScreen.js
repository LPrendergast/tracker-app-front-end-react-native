import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context } from "../context/AuthContext";

const SignInScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(Context);
  return (
    <View style={styles.viewStyle}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      />
      <NavLink
        text="Dont have an account? Sign up instead"
        routeName="SignUp"
      />
    </View>
  );
};

SignInScreen.navigationOptions = () => {
  return {
    headerShown: false,
    cardStyle: {
      backgroundColor: "#a8e6cf"
    }
  };
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 250
  }
});

export default SignInScreen;
