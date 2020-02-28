import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.viewStyle}>
      <Spacer>
        <Text h3 style={{ color: "white" }}>
          Sign In for Tracker
        </Text>
      </Spacer>
      <Input label="Email" autoCapitalize="none" autoCorrect={false} />
      <Input
        type="password"
        label="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer>
        <Button
          title="Sign In"
          raised
          buttonStyle={{ backgroundColor: "#ffaaa5" }}
        />
      </Spacer>
      <Button
        title=" Haven't made an account? Click here to sign up."
        onPress={() => navigation.navigate("SignUp")}
        type="clear"
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
