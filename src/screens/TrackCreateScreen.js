import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Map from "../components/Map";

const TrackCreateScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <View>
        <Text style={styles.mainText} h2>
          Create Track
        </Text>
        <Map />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainText: {
    marginTop: 20,
    alignSelf: "center",
  },
});

export default TrackCreateScreen;
