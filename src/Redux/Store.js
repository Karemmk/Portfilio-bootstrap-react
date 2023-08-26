import { configureStore } from "@reduxjs/toolkit";
import darkReducer from "./darkSlice";
import transReducer from "./transSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkReducer,
    translate: transReducer
  }
});
