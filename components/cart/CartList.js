import React from "react";
import { List, Spinner, View } from "native-base";
import productStore from "../../stores/productStore";
import cartStore from "../../stores/cartStore";
import CartItem from "./CartItem";
import { observer } from "mobx-react";
import { CheckOut, CheckoutText } from "./styles";

const CartList = () => {
  if (productStore.loading) return <Spinner />;
  const cartList = cartStore.items
    .map((item) => ({
      ...productStore.getProductById(item.productId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.id} />);
  return (
    <View>
      <List>{cartList}</List>
      <CheckOut onPress={cartStore.checkout}>
        <CheckoutText>Pay</CheckoutText>
      </CheckOut>
    </View>
  );
};

export default observer(CartList);
