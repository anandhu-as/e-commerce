import { createSlice } from "@reduxjs/toolkit";
import { datas } from "../../../NFT/Data";
const initialState = {
  products: datas,
  cart: [],
  cartItemCount: 0,
  total: 0,
  notifications: {
    sameProduct: [],
    cartNotification: [],
    clearNotification: [],
  },
};
const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    add: (state, { payload }) => {
      const { item, price } = payload;
      const same = state.cart.find((cartItem) => cartItem.id === item.id);
      same
        ? state.notifications.sameProduct.push(item)
        : state.cart.push({...item,quantity:1}) &&
          state.notifications.cartNotification.push(item);
      state.cartItemCount = state.cart.length;
    //  state.total = state.cartItemCount * price;///
    },
    remove: (state, { payload }) => {
      const { id, price, name } = payload;
      state.cart = state.cart.filter((item) => item.id !== id);
      state.cartItemCount = state.cart.length;
      state.total = state.cartItemCount * price;
      state.notifications.clearNotification.push(name);
    },
    clear: (state) => {
      state.cart = [];
      state.total = 0;
    },
    clearSpam: (state) => {
      state.notifications.cartNotification = [];
      state.notifications.sameProduct = [];
      state.notifications.clearNotification = [];
    },
  },
});
export default ProductSlice.reducer;
export const { add, remove, clear, clearSpam } = ProductSlice.actions;
