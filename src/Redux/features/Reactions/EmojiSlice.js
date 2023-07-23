import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  reactions: {
    likes: {},
    thumb: {},
    laugh: {},
  },
};
const EmojiSlice = createSlice({
  name: "emoji",
  initialState,
  reducers: {
    addReaction: (state, action) => {
      const { id, type } = action.payload;
      state.reactions[type][id]
        ? (state.reactions[type][id] += 1)
        : (state.reactions[type][id] = 1);
    },
  },
});
export default EmojiSlice.reducer;
export const { addReaction } = EmojiSlice.actions;
