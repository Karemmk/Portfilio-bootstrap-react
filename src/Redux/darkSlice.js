import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false
};

export const darkSlice = createSlice({
  name: "darkSlice",
  initialState,
  reducers: {
    nezla: (state) => {
      state.value = !state.value;
    },
   
  }
});
export const { nezla } = darkSlice.actions;
export default darkSlice.reducer;

