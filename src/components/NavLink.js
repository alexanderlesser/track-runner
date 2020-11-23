import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation, textContent, routeName }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(routeName);
        }}
      >
        <Text style={styles.link}>{textContent}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  link: {
    fontSize: 16,
    paddingVertical: 10,
    color: "#3874b0",
    alignSelf: "center",
  },
});
export default withNavigation(NavLink);
