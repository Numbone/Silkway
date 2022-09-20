import axios from "axios";
import { REACT_APP_API_URL } from "../../const";

// const $api=axios.create({
//     withCredentials:true,
//     baseURL:REACT_APP_API_URL
// })
// $api.interceptors.request.use(
//     config=>{
//         config.headers.Authorization= `Bearer ${localStorage.getItem('token')}`
//         return config
//     }
// )
// export default $api
const $host=axios.create({
    baseURL:REACT_APP_API_URL,
    responseType: "json"
   
})

const $authHost=axios.create({
    baseURL:REACT_APP_API_URL,
    responseType: "json"
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}


$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}