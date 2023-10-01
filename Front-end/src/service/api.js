import axios from "axios";
let user = localStorage.getItem('user') === '' ? null : localStorage.getItem('user')
let a = JSON.parse(user)
const customAxios = axios.create({
    headers: {
        Authorization: `Bearer ${a?.token}`
    },
    baseURL:'http://localhost:8080'
})
export default customAxios;
