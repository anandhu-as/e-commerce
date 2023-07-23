import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  like: 0,
  disLike: 0,
  laugh: 0,
};
const EmojiSlice = createSlice({
  name: "emoji",
  initialState,
  reducers: {
    addLike: (state, action) => {
      const { id } = action.payload;

    },
  },
});
export default EmojiSlice.reducer;
export const { addLike } = EmojiSlice.actions;
