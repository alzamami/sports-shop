import React from "react";
import { List, Spinner } from "native-base";
import productStore from "../../stores/productStore";
import cartStore from "../../stores/cartStore";
import CartItem from "./CartItem";
import { observer } from "mobx-react";

const CartList = () => {
  if (productStore.loading) return <Spinner />;
  const cartList = cartStore.items
    .map((item) => ({
      ...productStore.getProductById(item.productId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.id} />);
  return <List>{cartList}</List>;
};

export default observer(CartList);
