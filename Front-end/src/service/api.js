import axios from "axios";
let user = localStorage.getItem("item") ? null : localStorage.getItem("user")
let index = JSON.parse(user)
const customAxios = axios.create({
    headers: {
        Authorization: `Bearer ${index?.token}`
    },
    baseURL:'http://localhost:8080'

})
export default customAxios;