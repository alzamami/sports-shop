import React from "react";
import { View, Image, Text } from "react-native";
import shopStore from "../../stores/shopStore";
import { observer } from "mobx-react";
import productStore from "../../stores/productStore";
import ProductList from "../product/ProductList";
import { Container, List, Spinner } from "native-base";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {},
  content: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  list: {
    width: "100%",
  },
  item: {},
});

const StoreDetail = ({ route }) => {
  const { store } = route.params;
  if (shopStore.loading) return <Spinner />;
  // console.log(store);
  const products = store.products.map((product) =>
    productStore.getProductById(product.id)
  );
  return (
    <View style={styles.content}>
      <Image
        source={{ uri: store.image }}
        style={{ width: 150, height: 150 }}
      />
      <Text style={{ fontSize: 25, fontWeight: "600" }}> {store.name}</Text>
      <List.Item style={styles.list}>
        <ProductList products={products} />
      </List.Item>
    </View>
  );
};

export default observer(StoreDetail);
