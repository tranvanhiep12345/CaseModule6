import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
    'user/login',
    async (data) => {
        try {
            const res = await axios.post('http://localhost:8080/login', data)
            return res;
        }catch (e){
            console.log(e)}
    }
)
export const register = createAsyncThunk(
    'user/register',
    async (data) => {
        const res = await axios.post('http://localhost:8080/register', data)
        return res
    }
)