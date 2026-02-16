import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "header",
  initialState: {
    currentPage: "Home",
    currentHeight: 0
  },
  reducers: {
    updatePage: (state, action) => {
      state.currentPage = action.payload;
      // state.section = action.payload
    },
    updateHeight: (state, action) => {      
      state.currentHeight = action.payload;
    }
  },
});

export const { updatePage, updateHeight } = headerSlice.actions;

export default headerSlice.reducer;
