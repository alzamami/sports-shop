import { Spinner } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import productStore from "../../stores/productStore";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  if (productStore.loading) return <Spinner />;
  const productList = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
  return <View>{productList}</View>;
};

export default ProductList;
