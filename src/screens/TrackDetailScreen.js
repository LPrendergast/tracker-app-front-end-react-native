import React from "react";
import { View, StyleSheet, Text } from "react-native";

const TrackDetailScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.TextStyle}>TrackDetailScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  TextStyle: {
    fontSize: 48
  }
});

TrackDetailScreen.navigationOptions = () => {
  return {
    cardStyle: {
      backgroundColor: "#a8e6cf"
    }
  };
};

export default TrackDetailScreen;
