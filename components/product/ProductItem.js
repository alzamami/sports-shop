import React, { useState } from "react";
import { Image, Text } from "react-native";
import { List, Button } from "native-base";
import NumericInput from "react-native-numeric-input";
import cartStore from "../../stores/cartStore";

const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    const newItem = { productId: product.id, quantity };
    cartStore.addToCart(newItem);
  };
  return (
    <List.Item>
      <Image
        source={{ uri: product.image }}
        style={{ width: 100, height: 100 }}
      />
      <Text> {product.name}</Text>
      <NumericInput
        rounded
        totalWidth={100}
        totalHeight={50}
        initValue={quantity}
        minValue={1}
        onChange={setQuantity}
      />
      <Button onPress={handleAdd}>
        <Text>Add</Text>
      </Button>
    </List.Item>
  );
};

export default ProductItem;
