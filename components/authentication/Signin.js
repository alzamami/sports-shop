import React, { useState } from "react";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";
import { Text } from "react-native";
import {
  ContainerStyled,
  SigninTextStyled,
  TextInputStyled,
  SigninButtonStyled,
  SigninButtonTextStyled,
  AuthOther,
} from "./styles";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signin(user);
    if (authStore.user) navigation.replace("StoreList");
  };
  return (
    <ContainerStyled>
      <SigninTextStyled> Sign in </SigninTextStyled>
      <TextInputStyled
        placeholder="username"
        autoCapitalize="none"
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <TextInputStyled
        placeholder="password"
        autoCapitalize="none"
        onChangeText={(password) => setUser({ ...user, password })}
        secureTextEntry={true}
      />
      <SigninButtonStyled onPress={handleSubmit}>
        <SigninButtonTextStyled>Sign in</SigninButtonTextStyled>
      </SigninButtonStyled>
      <Text>Don’t have an account?</Text>
      <AuthOther onPress={() => navigation.navigate("Signup")}>
        Sign up
      </AuthOther>
    </ContainerStyled>
  );
};

export default observer(Signin);
