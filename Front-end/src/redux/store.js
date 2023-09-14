import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import foodReducer from "./merchant/foodSlice"
import restaurantReducer from "./restaurant/restaurantSlice"

export const store = configureStore({
    reducer:{
        user: userReducer,
        food: foodReducer,
        restaurant: restaurantReducer
    }
})