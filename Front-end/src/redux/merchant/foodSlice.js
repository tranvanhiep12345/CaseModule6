import {createSlice} from "@reduxjs/toolkit";
import {addFood, deleteFood, getFood, getFoodByName, updateFood} from "../../service/foodsService";

const initialState = {
    food: []
}
const foodSlice =createSlice({
    name: 'food',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(getFood.fulfilled, (state, action) =>{
            state.food = action.payload.data
        })
        builder.addCase(getFoodByName.fulfilled, (state, action) =>{
            state.food = action.payload.data
        })
        builder.addCase(addFood.fulfilled, (state, action) =>{
            state.food.push(action.payload)
        })
        builder.addCase(deleteFood.fulfilled, (state, action) =>{
            state.food.push(action.payload)
        })
        builder.addCase(updateFood.fulfilled, (state, action) =>{
            state.food.push(action.payload)
        })
    }
})
export default foodSlice.reducer