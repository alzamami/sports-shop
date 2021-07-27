import React from "react";
import { Button, Center, Flex, NativeBaseProvider, Spacer } from "native-base";

export default function Home({ navigation }) {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Flex h={40} mt={10}>
          <Button
            colorScheme="danger"
            _text={{
              color: "white",
            }}
            onPress={() => navigation.navigate("Signin")}
          >
            Sign in
          </Button>
          <Spacer />
          <Button
            colorScheme="danger"
            _text={{
              color: "white",
            }}
            onPress={() => navigation.navigate("Signup")}
          >
            Sign up
          </Button>
        </Flex>
      </Center>
    </NativeBaseProvider>
  );
}
