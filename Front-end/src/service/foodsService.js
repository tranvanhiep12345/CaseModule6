import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getFood = createAsyncThunk(
    'food/getFoods',
    async () =>{
        return await customAxios.get('/foods')
    }
)
export const getFoodId = createAsyncThunk(
    'food/getFoodsId',
    async (id) =>{
        return await customAxios.get(`/foods/${id}`)
    }
)
export const getFoodByName = createAsyncThunk(
    'food/getFoodByName',
    async (data) =>{
        return await customAxios.get(`/foods/?name=${data}`)
    }
)

export const addFood = createAsyncThunk(
    'food/addFoods',
    async (data) =>{
        const res  = await customAxios.post('/foods',data)
        return res.data
    }
)
export const deleteFood = createAsyncThunk(
    'food/deleteFoods',
    async (id) =>{
        return await customAxios.delete(`/foods/${id}`)
    })
export const updateFood = createAsyncThunk(
    'food/updateFoods',
    async (id) =>{
        return await customAxios.put(`/foods/${id}`)
    })
export const getFoodByType = createAsyncThunk(
    'food/getFoodByType',
    async (data) => {
        return await customAxios.get(`/foods/?type=${data}`);
    }
)
export const getFoodById = createAsyncThunk(
    'food/getFoodById',
    async (data) => {
        return await customAxios.get(`/foods/${data}`);
    }
)
