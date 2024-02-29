import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/userSlice";
import userData from "./slices/userDataSlice";

export const store = configureStore({
  reducer: { user, userData },
});
