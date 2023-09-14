import {createSlice} from "@reduxjs/toolkit";
import {addRestaurant, deleteRestaurant, getRestaurant, updateRestaurant} from "../../service/restaurantsService";

const initialState = {
    restaurant: []
}
const foodSlice =createSlice({
    name: 'restaurant',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(getRestaurant.fulfilled, (state, action) =>{
            state.restaurant = action.payload.data
        })
        builder.addCase(addRestaurant.fulfilled, (state, action) =>{
            console.log("foodSlice",action.payload)
            state.restaurant.push(action.payload)
        })


        builder.addCase(deleteRestaurant.fulfilled, (state, action) =>{
            console.log("foodSlice",action.payload)
            state.restaurant.push(action.payload)
        })


        builder.addCase(updateRestaurant.fulfilled, (state, action) =>{
            console.log("foodSlice",action.payload)
            state.food.push(action.payload)
        })
    }
})
export default foodSlice.reducer