import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";


export const login = createAsyncThunk(
    'user/login',
    async (data)=>{
        return await customAxios.post('/login', data)
    }
)
export const register = createAsyncThunk(
    'user/register',
    async (data)=>{
        return await customAxios.post('/register', data)
    }
)