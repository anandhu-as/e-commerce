import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const initialState = {
  like: 0,
  disLike: 0,
  laugh: 0,
};
const EmojiSlice = createSlice({
  name: "emoji",
  initialState,
  reducers: {},
});
export default EmojiSlice.reducer;
