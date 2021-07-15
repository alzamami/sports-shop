import React from "react";
import { View, Text, Image } from "react-native";
import { observer } from "mobx-react";
import { List } from "native-base";

const StoreItem = ({ store, navigation }) => {
  return (
    <List.Item
      onPress={() => navigation.navigate("StoreDetail", { store: store })}
    >
      <Image
        source={{ uri: store.image }}
        style={{ width: 150, height: 150 }}
      />
      <Text> {store.name}</Text>
    </List.Item>
  );
};

export default observer(StoreItem);
