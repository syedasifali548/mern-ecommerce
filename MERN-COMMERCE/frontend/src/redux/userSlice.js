import { createSlice } from "@reduxjs/toolkit";

// Register User
export const register = ()=>{}

const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser : null,
        newUser : null,
        isFetching:false,
        isError: false,
        isSuccess: false,
        isLoading: false,
    },
    reducers:{
        loginStart: (state) => {
            state.isFetching = true;
            state.isLoading = true;
          },
          loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.isSuccess =  true;
            state.isLoading = false

          },
          loginFailure: (state) => {
            state.isFetching = false;
            state.isError = true;
            state.isLoading = false;
            state.isSuccess =  false;

          },
        registerStart: (state) => {
            state.isFetching = true;
            state.isLoading = true;
          },
          registerSuccess: (state, action) => {
            state.isFetching = false;
            state.newUser = action.payload;
            state.isSuccess =  true;
            state.isLoading = false

          },
          registerFailure: (state) => {
            state.isFetching = false;
            state.isError = true;
            state.isLoading = false;
            state.isSuccess =  false;

          },
          logoutSuccess: (state) => {
             state.currentUser = null;
          },
    },
})

export const {loginStart,loginSuccess,loginFailure,
  registerStart,registerSuccess,registerFailure,logoutSuccess
} = userSlice.actions;
export default userSlice.reducer;

