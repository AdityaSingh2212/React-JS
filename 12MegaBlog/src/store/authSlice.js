import { createSlice } from "@reduxjs/toolkit";
//slice work -> ask store whether the user is authenticated or not
const initialState = {
    status : false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => { //action gives payload which stores the data about what is going to be happened. t accepts a single argument, action , which must be an object with a type property describing the change to be made.
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
     }
})

export const {login, logout} = authSlice.actions; //here action refers to login and logout and their values

export default authSlice.reducer;