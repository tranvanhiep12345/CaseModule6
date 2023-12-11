import {createSlice} from "@reduxjs/toolkit";
import {addFood, deleteFood, getFood, getFoodByName, updateFood} from "../../service/foodsService";
import {getAllImageByFoodType} from "../../service/imageService";

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
        builder.addCase(getAllImageByFoodType.fulfilled, (state, action) =>{
            state.food.push = action.payload.data
        })
    }
})
export default foodSlice.reducer