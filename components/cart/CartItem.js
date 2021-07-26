import React from "react";
import { List } from "native-base";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import cartStore from "../../stores/cartStore";
export const DeleteIcon = styled(Ionicons)`
  color: red;
`;

const CartItem = ({ item }) => {
  return (
    <List.Item>
      <Text>{item.name} | </Text>
      <Text>
        {item.price} KD * {item.quantity} |{" "}
      </Text>
      <Text>{item.price * item.quantity} KD</Text>
      <DeleteIcon
        name="trash-bin"
        size={24}
        onPress={() => cartStore.deleteItem(item.id)}
      />
    </List.Item>
  );
};

export default CartItem;
