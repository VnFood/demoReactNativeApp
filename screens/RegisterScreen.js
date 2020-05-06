import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class RegisterScreen extends React.Component {
  render() {
    return (
      <View style={stylesRegisterScreen.container}>
        <Text>Register Screen</Text>
      </View>
    );
  }
}

const stylesRegisterScreen = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})