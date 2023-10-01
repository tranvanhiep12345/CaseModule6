import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getRestaurant = createAsyncThunk(
    'restaurant/getRestaurant',
    async () =>{
        return await customAxios.get('/rests')
    }
)
export const getRestaurantId = createAsyncThunk(
    'restaurant/getRestaurant',
    async (id) =>{
        return await customAxios.get(`/rests/${id}`)
    }
)
export const addRestaurant = createAsyncThunk(
    'restaurant/addRestaurant',
    async (data) =>{
        const res  = await customAxios.post('/rests',data)
        return res.data
    }
)
export const deleteRestaurant = createAsyncThunk(
    'restaurant/deleteRestaurant',
    async (id) =>{
        return await customAxios.delete(`/rests/${id}`)
    })
export const updateRestaurant = createAsyncThunk(
    'restaurant/updateRestaurant',
    async (id) =>{
        return await customAxios.put(`/rests/${id}`)
    })
