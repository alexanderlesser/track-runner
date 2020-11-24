import React, { useState, useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  console.log(locations.length);

  return (
    <>
      <Spacer>
        <Spacer>
          <Input
            placeholder=" Enter track Name"
            value={name}
            onChangeText={changeName}
          />
        </Spacer>
        {recording ? (
          <Button
            buttonStyle={{ backgroundColor: "red" }}
            title="Stop Recording"
            onPress={stopRecording}
          />
        ) : (
          <Button title="Start recording" onPress={startRecording} />
        )}
      </Spacer>
    </>
  );
};

export default TrackForm;
