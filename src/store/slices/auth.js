import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  token: null,
  userId: null,
  email: null,
  password: null,
  // isValid: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    // setIsValid(state, action) {
    //   state.isValid = action.payload;
    // }
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
