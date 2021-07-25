import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import StoreList from "../store/StoreList";
import StoreDetail from "../store/StoreDetail";
import CartList from "../cart/CartList";
import CartButton from "../cart/buttons/CartButton";

const Stack = createStackNavigator();

export default RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "#2C2E43" },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StoreList"
        component={StoreList}
        options={{ title: "Choose a Store", headerRight: () => <CartButton /> }}
      />
      <Stack.Screen
        name="StoreDetail"
        component={StoreDetail}
        options={({ route }) => {
          const { store } = route.params;
          return {
            title: store.name,
            headerRight: () => <CartButton />,
          };
        }}
      />
      <Stack.Screen name="CartList" component={CartList} />
    </Stack.Navigator>
  );
};
