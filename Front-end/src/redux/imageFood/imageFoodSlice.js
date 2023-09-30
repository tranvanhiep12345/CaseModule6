import {createSlice} from "@reduxjs/toolkit";
import {getAllImageByFoodId, getAllImageByFoodName, getAllImageByFoodType} from "../../service/imageService";

const initialState = {
    imageFood: []
}
const imageFoodSlice = createSlice({
    name: 'imageFood',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(getAllImageByFoodId.fulfilled, (state, action) =>{
            state.restaurant = action.payload.data
        })
        builder.addCase(getAllImageByFoodName.fulfilled, (state, action) =>{
            state.restaurant = action.payload.data
        })
        builder.addCase(getAllImageByFoodType.fulfilled, (state, action) =>{
            state.restaurant = action.payload.data
        })
    }
})
export default imageFoodSlice.reducer