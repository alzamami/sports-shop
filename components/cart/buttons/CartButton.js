import { useNavigation } from "@react-navigation/core";
import React from "react";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

const CartButtonStyled = styled(FontAwesome)`
  color: white;
  margin-right: 15px;
`;

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <CartButtonStyled
      name="shopping-cart"
      size={24}
      onPress={() => navigation.navigate("CartList")}
    />
  );
};

export default CartButton;
