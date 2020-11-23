import React, { useContext } from "react";
import { View, StyleSheet, Image } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);
  return (
    <View style={styles.signupView}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <Image
        source={require("../../assets/trackrunner.png")}
        style={{ width: "100%", height: 200, marginTop: 30 }}
        resizeMode="contain"
      />

      <AuthForm
        headerText="Sign up to Track Runner"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={({ email, password }) => signup({ email, password })}
      />

      <NavLink
        textContent="Already have an account? Sign in instead!"
        routeName="Signin"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
    headerStyle: {
      backgroundColor: "#f4511e",
    },
  };
};

const styles = StyleSheet.create({
  signupView: {
    flex: 1,
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
  },
});

export default SignupScreen;
