import { createSlice } from "@reduxjs/toolkit";

const modelViewerScriptSlice = createSlice({
  name: "modelViewerScriptSlice",
  initialState: {
    hasModelViewerScriptLoaded: false
  },
  reducers: {
    updateScriptLoadStatus: (state, action) => {
      state.hasModelViewerScriptLoaded = action.payload;
      // state.section = action.payload
    }
  },
});

export const { updateScriptLoadStatus } = modelViewerScriptSlice.actions;

export default modelViewerScriptSlice.reducer;
