import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getFood = createAsyncThunk(
    'blogs/getBlogs',
    async () =>{
        return await axios.get('http://localhost:8080/foods')
    }
)
export const getFoodId = createAsyncThunk(
    'blogs/getBlogs',
    async () =>{
        return await axios.get('http://localhost:8080/foods/:id')
    }
)
export const getFoodByName = createAsyncThunk(
    'blogs/getFoodByName',
    async (data) =>{
        return await axios.get(`http://localhost:8080/foods/?name=${data}`)
    }
)

export const addFood = createAsyncThunk(
    'foods/addFoods',
    async (data) =>{
        const res  = await axios.post('http://localhost:8080/foods',data)
        console.log('add food, foods Service: ', res.data)
        return res.data
    }
)
export const deleteFood = createAsyncThunk(
    'foods/deleteFoods',
    async (id) =>{
        return await axios.delete(`http://localhost:8080/foods/${id}`)
    })
export const updateFood = createAsyncThunk(
    'foods/updateFoods',
    async (id) =>{
        return await axios.put(`http://localhost:8080/foods/${id}`)
    })

