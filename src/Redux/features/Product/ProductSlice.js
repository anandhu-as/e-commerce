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
      same ? alert("Item is already in the cart") : state.cart.push(item);
    },
    remove:(state,action)=>{
state.cart=state.cart.filter((item)=>item.id!==action.payload)
    }
  },
});

export default ProductSlice.reducer;
export const { add ,remove} = ProductSlice.actions;
