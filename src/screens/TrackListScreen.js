import React, { useContext } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={fetchTracks} />
      <Text style={styles.mainText}>Track List Screen</Text>
      <FlatList
        data={state}
        keyExtractor={(track) => track._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TrackDetail", { _id: item._id })
              }
            >
              <View style={styles.listBox}>
                <Text h4>{item.name}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

TrackListScreen.navigationOptions = () => {
  return {
    title: "tracks",
    headerStyle: {
      backgroundColor: "#3874b0",
    },
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listBox: {
    padding: 10,
    margin: 5,
    backgroundColor: "#d1219c",
    borderRadius: 5,
  },
  mainText: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default TrackListScreen;
