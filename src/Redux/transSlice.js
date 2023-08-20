import { createSlice } from "@reduxjs/toolkit";

export const transSlice = createSlice({
  name: "tranSlice",
  initialState: { value: false },
  reducers: {
    trans: (state, action) => {
      state.value = !state.value;
    }
  }
});
export const { trans } = transSlice.actions;
export default transSlice.reducer;
