import { configureStore } from "@reduxjs/toolkit";
import ideaReducer from "./ideaSlice";

export const store = configureStore({
  reducer: {
    ideas: ideaReducer,
  },
});
