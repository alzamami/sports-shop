import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import styles from "./styles";
import ProductList from "./components/product/ProductList";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/Navigation";

const theme = {
  mainColor: "#1d3557",
  backgroundColor: "white",
  buttonColor: "red",
};

export default function App() {
  return (
    <NativeBaseProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
