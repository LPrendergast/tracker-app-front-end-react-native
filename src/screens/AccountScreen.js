import React, { useContext } from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";
import { SaveAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={styles.TextStyle}>Account Screen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};
AccountScreen.navigationOptions = () => {
  return {
    cardStyle: {
      backgroundColor: "#a8e6cf"
    }
  };
};
const styles = StyleSheet.create({
  TextStyle: {
    fontSize: 48
  }
});

export default AccountScreen;
