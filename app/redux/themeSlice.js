import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "dark",
  },
  reducers: {
    updateTheme: (state, action) => {
      state.theme = action.payload;
      // state.section = action.payload
    },
  },
});

export const { updateTheme } = themeSlice.actions;

export default themeSlice.reducer;
