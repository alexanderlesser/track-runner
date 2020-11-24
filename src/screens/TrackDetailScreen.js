import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";

const TrackDetailsScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam("_id");

  const track = state.find((t) => t._id === _id);
  const initalCoords = track.locations[0].coords;

  return (
    <View>
      <Text style={styles.mainText}>{track.name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initalCoords,
        }}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </View>
  );
};

TrackDetailsScreen.navigationOptions = () => {
  return {
    title: "Details",
    headerStyle: {
      backgroundColor: "#f4511e",
    },
  };
};

const styles = StyleSheet.create({
  mainText: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  map: {
    height: "100%",
  },
});

export default TrackDetailsScreen;
