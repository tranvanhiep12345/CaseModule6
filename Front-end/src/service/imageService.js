import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getAllImageByFoodId = createAsyncThunk(
    'imageFood/getAllImageByFoodId',
    async (foodId) =>{
        return await customAxios.get(`/imageFoods/?foodId=${foodId}`)
    }
)
export const getAllImageByFoodName = createAsyncThunk(
    'imageFood/getAllImageByFoodName',
    async (foodName) =>{
        return await customAxios.get(`/imageFoods/?foodName=${foodName}`)
    }
)
export const getAllImageByFoodType = createAsyncThunk(
    'imageFood/getAllImageByFoodType',
    async(type) => {
        return await customAxios.get(`/imageFoods/?foodType=${type}`)
    }
)

