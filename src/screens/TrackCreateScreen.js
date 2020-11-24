// import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import { Feather } from "@expo/vector-icons";
import { Context as LocationContext } from "../context/LocationContext";
import Map from "../components/Map";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
import Spacer from "../components/Spacer";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <View>
        <Text style={styles.mainText} h2>
          Create Track
        </Text>
        <Map />
        {err ? <Text>Please Enable location services</Text> : null}
        <TrackForm />
      </View>
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = () => {
  return {
    title: "Add Track",
    tabBarColor: "#3e2465",
    tabBarIcon: <Feather name="plus-circle" size={24} />,
    activeTintColor: "#e91e63",
    labelStyle: {
      fontSize: 12,
    },
  };
};

const styles = StyleSheet.create({
  mainText: {
    marginTop: 20,
    alignSelf: "center",
  },
});

export default withNavigationFocus(TrackCreateScreen);
