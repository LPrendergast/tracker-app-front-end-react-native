import React from "react";
import { Text, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 51.5117 + i * 0.001,
      longitude: 0.124 + i * 0.001
    });
  }
  return (
    <MapView
      style={styles.MapStyle}
      initialRegion={{
        latitude: 51.5117,
        longitude: 0.124,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
      }}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  MapStyle: {
    height: 350,
    width: 350,
    alignSelf: "center"
  }
});

export default Map;
