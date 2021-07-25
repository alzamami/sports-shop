import React from "react";
import { List } from "native-base";
import { Text } from "react-native";

const CartItem = ({ item }) => {
  return (
    <List.Item>
      <Text>{item.name} | </Text>
      <Text>
        {item.price} KD * {item.quantity} |{" "}
      </Text>
      <Text>{item.price * item.quantity} KD</Text>
    </List.Item>
  );
};

export default CartItem;
