import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { GlobalState } from "./type";

const initialState: GlobalState = {
  openApp: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setOpenApp(state, action: PayloadAction<boolean>) {
      state.openApp = action.payload;
    },
  },
});

export default globalSlice;
