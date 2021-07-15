import React from "react";
import { View, Text, Image } from "react-native";

const ProductItem = ({ product }) => {
  return (
    <View>
      <Image
        source={{ uri: product.image }}
        style={{ width: 100, height: 100 }}
      />
      <Text> {product.name}</Text>
    </View>
  );
};

export default ProductItem;
