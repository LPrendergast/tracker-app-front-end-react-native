import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { requestPermissionsAsync } from "expo-location";
import Map from "../components/Map";

const TrackCreateScreen = ({ navigation }) => {
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a track</Text>
      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  TextStyle: {
    fontSize: 48
  }
});

TrackCreateScreen.navigationOptions = () => {
  return {
    cardStyle: {
      backgroundColor: "#a8e6cf"
    }
  };
};

export default TrackCreateScreen;
