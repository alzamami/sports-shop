import { makeAutoObservable } from "mobx";
import instance from "./instance";

class ShopStore {
  stores = [];
  loading = true;
  constructor() {
    makeAutoObservable(this);
  }

  fetchStores = async () => {
    try {
      const response = await instance.get("/stores");
      this.stores = response.data;
      this.loading = false;
      // console.log(this.stores);
    } catch (error) {
      console.error("fetchStores", error);
    }
  };
}

const shopStore = new ShopStore();
shopStore.fetchStores();
export default shopStore;
