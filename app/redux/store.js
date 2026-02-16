import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import portfolioSlice from "./portfolioSlice";
import headerSlice from "./headerSlice";
import modelViewerScriptSlice from "./modelViewerScriptStatus"

export default configureStore({
  reducer: { 
    theme: themeSlice,
    portfolio: portfolioSlice,
    header: headerSlice,
    modelViewerScriptSlice: modelViewerScriptSlice
  },
  
});
