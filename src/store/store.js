import { configureStore } from "@reduxjs/toolkit";
import { authSlide } from "./auth/authSlice";

export default configureStore({
  reducer: {
    auth: authSlide.reducer,
  },
});
