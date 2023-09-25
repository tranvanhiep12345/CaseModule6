import axios from "axios";
const  a = JSON.parse(localStorage.getItem("user")).token
const customAxios = axios.create({
    headers: {
        Authorization: `Bearer ${a}`
    },
    baseURL:'http://localhost:8080'
})
export default customAxios;