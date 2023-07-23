import { createSlice } from "@reduxjs/toolkit";
import { datas } from "../../../NFT/Data";

const initialState = {
  products: datas,
  cart: [],
  cartItemCount: 0,
  total: 0,
};
const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    add: (state, action) => {
      const { item, price } = action.payload;
      const same = state.cart.find((cartItem) => cartItem.id === item.id);
      same ? alert("Item is already in the cart") : state.cart.push(item);
      state.cartItemCount = state.cart.length;
      state.total = state.cartItemCount * price;
    },
    remove: (state, action) => {
      const { id, price } = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
      state.cartItemCount = state.cart.length;
      state.total = state.cartItemCount * price;
    },
    clear: (state) => {
      state.cart = [];
      state.total = 0;
    },
  },
});

export default ProductSlice.reducer;
export const { add, remove, clear } = ProductSlice.actions;
