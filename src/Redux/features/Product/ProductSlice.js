import { createSlice } from "@reduxjs/toolkit";
import { datas } from "../../../NFT/Data";

const initialState = {
  products: datas,
  cart: [],
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    add: (state, action) => {
      const { item } = action.payload;
      const same = state.cart.find((cartItem) => cartItem.id === item.id);
      if (same) alert("Item is already in the cart")
      else state.cart.push(item)
    },
  },
});

export default ProductSlice.reducer;
export const { add } = ProductSlice.actions;
