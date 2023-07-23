import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../features/Product/ProductSlice";
import EmojiSlice from "../features/Reactions/EmojiSlice";
export const store = configureStore({
  reducer: {
    products: ProductSlice,
    emoji: EmojiSlice,
  },
});
