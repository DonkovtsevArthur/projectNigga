import React from "react";
import { StyleSheet, Platform, Image, Text, View } from "react-native";
import Loading from "./js/Loading";
import { SwitchNavigator } from "react-navigation";

const App = SwitchNavigator(
  { Loading },
  {
    initialRouteName: "Loading"
  }
);

export default App;
