import { RootState } from "../../store";
import globalSlice from "./slice";

const globalReducer = globalSlice.reducer;

const { setOpenApp } = globalSlice.actions;

const selectorOpenApp = (state: RootState) => state.globalReducer.openApp;

const global = { globalReducer };

export { setOpenApp };
export { selectorOpenApp };
export { default as globalMiddlewares } from "./middleware";
export default global;
