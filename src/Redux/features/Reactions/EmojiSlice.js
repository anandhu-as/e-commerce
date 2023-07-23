import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  likes: {},
  disLike: {},
  laugh: {},
};
const EmojiSlice = createSlice({
  name: "emoji",
  initialState,
  reducers: {
    addLike: (state, action) => {
      const id = action.payload;
      state.likes[id] ? (state.likes[id] += 1) : (state.likes[id] = 1)
    },
  },
});
export default EmojiSlice.reducer;
export const { addLike } = EmojiSlice.actions;
