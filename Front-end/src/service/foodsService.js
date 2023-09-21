import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getFood = createAsyncThunk(
    'food/getFoods',
    async () =>{
        return await axios.get('http://localhost:8080/foods')
    }
)
export const getFoodId = createAsyncThunk(
    'food/getFoods',
    async (id) =>{
        return await axios.get(`http://localhost:8080/foods/${id}`)
    }
)
export const getFoodByName = createAsyncThunk(
    'food/getFoodByName',
    async (data) =>{
        return await axios.get(`http://localhost:8080/foods/?name=${data}`)
    }
)

export const addFood = createAsyncThunk(
    'food/addFoods',
    async (data) =>{
        const res  = await axios.post('http://localhost:8080/foods',data)
        return res.data
    }
)
export const deleteFood = createAsyncThunk(
    'food/deleteFoods',
    async (id) =>{
        return await axios.delete(`http://localhost:8080/foods/${id}`)
    })
export const updateFood = createAsyncThunk(
    'food/updateFoods',
    async (id) =>{
        return await axios.put(`http://localhost:8080/foods/${id}`)
    })