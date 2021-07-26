import { useNavigation } from "@react-navigation/core";
import React from "react";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import { Button } from "native-base";
import { observer } from "mobx-react";
import { Text } from "react-native";
import cartStore from "../../../stores/cartStore";

const CartButtonStyled = styled(FontAwesome)`
  color: white;
  margin-right: 15px;
`;

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <Button onPress={() => navigation.navigate("CartList")}>
      <CartButtonStyled name="shopping-cart" size={24} />
      <Text>{cartStore.totalQuantity}</Text>
    </Button>
  );
};

export default observer(CartButton);
