import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./types";

const initialState: UserState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice;
