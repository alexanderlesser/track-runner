import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TrackDetailsScreen = () => {
  return (
    <View>
      <Text style={styles.mainText}>Track Detail Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainText: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default TrackDetailsScreen;
