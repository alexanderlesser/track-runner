import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Button } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={styles.mainText}>Account Screen</Text>
      <Spacer>
        <Button title="Sign out" onPress={() => signout()} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = () => {
  return {
    title: "Account",
    tabBarColor: "#3e2465",
    tabBarIcon: <Feather name="user" size={20} />,
    activeTintColor: "#e91e63",
    labelStyle: {
      fontSize: 12,
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
});

export default AccountScreen;
