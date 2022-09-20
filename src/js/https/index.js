import axios from "axios";
import { REACT_APP_API_URL } from "../../const";

const $host=axios.create({
    baseURL:REACT_APP_API_URL,
    responseType: "json"
   
})

const $authHost=axios.create({
    baseURL:REACT_APP_API_URL,
    responseType: "json"
})

const authInterceptor = config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}


$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}