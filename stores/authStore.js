import AsyncStorage from "@react-native-async-storage/async-storage";
import { makeAutoObservable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";

class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this);
  }

  signup = async (newUser) => {
    try {
      const response = await instance.post("/signup", newUser);
      this.setUser(response.data.token);
    } catch (error) {
      console.error(error);
    }
  };
  signin = async (userDate) => {
    try {
      const response = await instance.post("/signin", userDate);
      this.setUser(response.data.token);
    } catch (error) {
      console.error(error);
    }
  };
  signout = async () => {
    delete instance.defaults.headers.common.Authorization;
    await AsyncStorage.removeItem("myToken");
    this.user = null;
  };

  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now();
      const user = decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
