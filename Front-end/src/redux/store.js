import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import foodReducer from "./merchant/merchantSlice"

export const store = configureStore({
    reducer:{
        user: userReducer,
        food: foodReducer
    }
})