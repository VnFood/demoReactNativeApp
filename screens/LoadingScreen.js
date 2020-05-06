import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class LoadingScreen extends React.Component {
  render() {
    return (
      <View style={stylesLoadingScreen.container}>
        <Text>Loading Screen</Text>
      </View>
    );
  }
}

const stylesLoadingScreen = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
