import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    currentModel: "Furniture",
  },
  reducers: {
    changeCurrentModel: (state, action) => {            
      state.currentModel = action.payload;      
    },
  },
});

export const { changeCurrentModel } = portfolioSlice.actions;

export default portfolioSlice.reducer;
