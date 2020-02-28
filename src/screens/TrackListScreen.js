import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Spacer>
        <Text h3>TrackListScreen</Text>
      </Spacer>
      <Spacer>
        <Button
          title="Go to Track Detail"
          onPress={() => navigation.navigate("TrackDetail")}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
