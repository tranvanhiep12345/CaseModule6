import {createSlice} from "@reduxjs/toolkit";
import {login, register} from "../../service/userService";
<<<<<<< HEAD
let user = localStorage.getItem('user') === '' ? null :localStorage.getItem('user')
=======
let user = localStorage.getItem('user') === ''?null:localStorage.getItem('user')
>>>>>>> na
const initialState = {
    currentUser: JSON.parse(user)
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers:builder => {
        builder.addCase(login.fulfilled,(state,action)=>{
            state.currentUser = action.payload.data
            localStorage.setItem('user',JSON.stringify(action.payload.data))
        });
        builder.addCase(register.fulfilled,(state,action)=>{
            state.currentUser = action.payload
        })
    }
})
export default userSlice.reducer