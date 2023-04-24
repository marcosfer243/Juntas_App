import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
  message: "",
  registered: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.currentUser = null;
      state.message = action.payload;
    },
    registeredSuccess: (state) => {
      state.registered = true;
    },
    registeredFailure: (state) => {
      state.registered = false;
    },
    logout: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
  },
});

export const {
  loginStart,
  loginFailure,
  loginSuccess,
  logout,
  registeredSuccess,
  registeredFailure,
} = userSlice.actions;

export default userSlice.reducer;
