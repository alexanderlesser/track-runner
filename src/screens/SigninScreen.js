import React, { useContext } from "react";
import { View, StyleSheet, Image } from "react-native";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  return (
    <View style={styles.signinView}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <View style={styles.signinView}>
        <Image
          source={require("../../assets/trackrunner.png")}
          style={{ width: "100%", height: 200, marginTop: 30 }}
          resizeMode="contain"
        />

        <AuthForm
          headerText="Sign in to Track Runner"
          errorMessage={state.errorMessage}
          submitButtonText="Sign in"
          onSubmit={({ email, password }) => signin({ email, password })}
        />

        <NavLink
          textContent="Don't have an account? Sign up instead!"
          routeName="Signup"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signinView: {
    flex: 1,
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
  },
});

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
    headerStyle: {
      backgroundColor: "#f4511e",
    },
  };
};

export default SigninScreen;
