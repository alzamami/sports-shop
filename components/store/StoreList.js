import React from "react";
import { View } from "react-native";
import shopStore from "../../stores/shopStore";
import { observer } from "mobx-react";
import { List, Spinner } from "native-base";

import StoreItem from "./StoreItem";

const StoreList = ({ navigation }) => {
  if (shopStore.loading) return <Spinner />;
  const storeList = shopStore.stores.map((store) => (
    <StoreItem store={store} key={store.id} navigation={navigation} />
  ));
  return <List>{storeList}</List>;
};

export default observer(StoreList);
