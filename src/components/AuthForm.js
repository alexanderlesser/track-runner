import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Fontisto } from "@expo/vector-icons";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.formView}>
      <Spacer>
        <Text style={styles.headerText} h4>
          {headerText}
        </Text>
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      </Spacer>
      <Spacer>
        <Input
          label="Email"
          leftIcon={<Fontisto name="email" size={24} color="black" />}
          value={email}
          onChangeText={(newEmail) => setEmail(newEmail)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          label="Password"
          leftIcon={<Fontisto name="key" size={24} color="black" />}
          value={password}
          onChangeText={(newPassword) => setPassword(newPassword)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
      </Spacer>
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  formView: {
    justifyContent: "center",
  },
  headerText: {
    alignSelf: "center",
    color: "#8a8a88",
  },
  input: {
    marginLeft: 20,
    marginRight: 5,
  },
  error: {
    padding: 5,
    marginTop: 10,
    borderRadius: 5,
    textAlign: "center",
    fontSize: 16,
    backgroundColor: "#cc3300",
    fontWeight: "bold",
    color: "#fff",
  },
  loginButton: {
    fontSize: 18,
    color: "#3874b0",
    alignSelf: "center",
  },
});

export default AuthForm;
