import { useNavigation } from "@react-navigation/core";
import React from "react";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import { Button } from "native-base";
import { observer } from "mobx-react";
import { Alert, Text } from "react-native";
import cartStore from "../../../stores/cartStore";
import authStore from "../../../stores/authStore";

const CartButtonStyled = styled(FontAwesome)`
  color: white;
  margin-right: 15px;
`;

const CartButton = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    if (authStore.user) {
      navigation.navigate("CartList");
    } else {
      Alert.alert(
        "Sign in",
        "You need to Sign in before checkout",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancle Pressed"),
            style: "cancel",
          },
          { text: "Sign in", onPress: () => navigation.navigate("Signin") },
        ],
        { cancelable: false }
      );
    }
  };
  return (
    <Button onPress={handlePress}>
      <CartButtonStyled name="shopping-cart" size={24} />
      <Text>{cartStore.totalQuantity}</Text>
    </Button>
  );
};

export default observer(CartButton);
