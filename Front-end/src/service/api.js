import axios from "axios";
<<<<<<< HEAD
let user = localStorage.getItem("item") ? null : localStorage.getItem("user")
let index = JSON.parse(user)
const customAxios = axios.create({
    headers: {
        Authorization: `Bearer ${index?.token}`
=======
const  a = JSON.parse(localStorage.getItem("user")).token
const customAxios = axios.create({
    headers: {
        Authorization: `Bearer ${a}`
>>>>>>> na
    },
    baseURL:'http://localhost:8080'
})
export default customAxios;