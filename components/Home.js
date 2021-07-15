import React from "react";
import { Button, Center, NativeBaseProvider } from "native-base";
import { Alert } from "react-native";

export default function Home({ navigation }) {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Button
          colorScheme="danger"
          _text={{
            color: "white",
          }}
          onPress={() => navigation.navigate("StoreList")}
        >
          show stores list
        </Button>
      </Center>
    </NativeBaseProvider>
  );
}
