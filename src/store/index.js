import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import callReducer from "./slices/call";

const store = configureStore({
  reducer: {
    auth: authReducer,
    call: callReducer
  },
});

export default store;
