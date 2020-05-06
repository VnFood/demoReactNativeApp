import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={stylesLoginScreen.container}>
        <Text>Login Screen</Text>
      </View>
    );
  }
}

const stylesLoginScreen = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})