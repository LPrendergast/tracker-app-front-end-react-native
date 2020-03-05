import React, { useEffect, useState } from "react";
// import "../_mockLocation";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from "expo-location";
import Map from "../components/Map";

const TrackCreateScreen = ({ navigation }) => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        },
        location => {
          console.log(location);
        }
      );
    } catch (err) {
      setErr(err);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
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
