import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getRestaurant = createAsyncThunk(
    'restaurant/getRestaurant',
    async () =>{
        return await axios.get('http://localhost:8080/rests')
    }
)

export const addRestaurant = createAsyncThunk(
    'restaurant/addRestaurant',
    async (data) =>{
        const res  = await axios.post('http://localhost:8080/rests',data)
        console.log('add food, foods Service: ', res.data)
        return res.data
    }
)
export const deleteRestaurant = createAsyncThunk(
    'restaurant/deleteRestaurant',
    async (id) =>{
        return await axios.delete(`http://localhost:8080/rests/${id}`)
    })
export const updateRestaurant = createAsyncThunk(
    'restaurant/updateRestaurant',
    async (id) =>{
        return await axios.put(`http://localhost:8080/rests/${id}`)
    })

