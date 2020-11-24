import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Input, Button } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import Spacer from "../components/Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
    reset,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  const handlePress = () => {
    return null;
  };

  return (
    <>
      <Spacer>
        <Input
          placeholder=" Enter track Name"
          value={name}
          onChangeText={changeName}
        />
        {/* {recording ? (
          <Button
            buttonStyle={{ backgroundColor: "red", marginTop: 10 }}
            title="Stop Recording"
            onPress={stopRecording}
          />
        ) : (
          <Button title="Start recording" onPress={startRecording} />
        )}
        {!recording && locations.length ? (
          <Button
            buttonStyle={{ backgroundColor: "green", marginTop: 20 }}
            title="Save recording"
            onPress={saveTrack}
          />
        ) : null} */}
        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={recording ? stopRecording : startRecording}
          >
            <View style={styles.iconTextContainer}>
              <Feather
                name={recording ? "stop-circle" : "play-circle"}
                style={styles.iconPlay}
              />
              <Text>{recording ? "Stop" : "Record"}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={!recording && locations.length ? saveTrack : handlePress}
          >
            <View style={styles.iconTextContainer}>
              <Feather
                name="save"
                style={
                  !recording && locations.length
                    ? styles.iconSaveActive
                    : styles.iconSave
                }
              />
              <Text>Save Track</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={!recording && locations.length ? reset : handlePress}
          >
            <View style={styles.iconTextContainer}>
              <Feather
                name="delete"
                style={
                  !recording && locations.length
                    ? styles.iconDeleteActive
                    : styles.iconDelete
                }
              />
              <Text>Delete Track</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  iconTextContainer: {
    alignItems: "center",
  },
  iconPlay: {
    fontSize: 45,
    color: "blue",
  },
  iconSaveActive: {
    fontSize: 45,
    color: "green",
  },
  iconSave: {
    fontSize: 45,
    color: "gray",
  },
  iconDeleteActive: {
    fontSize: 45,
    color: "red",
  },
  iconDelete: {
    fontSize: 45,
    color: "gray",
  },
});

export default TrackForm;
