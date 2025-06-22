import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupData:
  localStorage.getItem("signupData") &&
  localStorage.getItem("signupData") !== "undefined"
    ? JSON.parse(localStorage.getItem("signupData"))
    : null,

token:
  localStorage.getItem("token") &&
  localStorage.getItem("token") !== "undefined"
    ? JSON.parse(localStorage.getItem("token"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData(state, value) {
      state.signupData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
    },
  },
});

export const { setSignupData, setLoading, setToken } = authSlice.actions;

export default authSlice.reducer;
