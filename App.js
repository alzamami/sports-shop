import "react-native-gesture-handler";

import React from "react";
import { ThemeProvider } from "styled-components/native";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/Navigation";

const theme = {
  mainColor: "#1d3557",
  backgroundColor: "white",
  red: "red",
  topBarColor: "#2C2E43",
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
