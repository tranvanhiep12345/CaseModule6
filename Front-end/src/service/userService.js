import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
    'user/login',
    async (data)=>{
        console.log(data)
        return await axios.post('http://localhost:8080/login', data)
    }
)
export const register = createAsyncThunk(
    'user/register',
    async (data)=>{
        return await axios.post('http://localhost:8080/register', data)
    }
)
