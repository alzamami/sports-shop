import { makeAutoObservable } from "mobx";
import instance from "./instance";

class ProductStore {
  products = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchProducts = async () => {
    try {
      const response = await instance.get("/products");
      this.products = response.data;
      this.loading = false;
    } catch (error) {
      console.error("fetchProducts", error);
    }
  };

  getProductById = (productId) =>
    this.products.find((product) => product.id === productId);
}

const productStore = new ProductStore();
productStore.fetchProducts();
export default productStore;
