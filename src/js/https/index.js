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
// $authHost.interceptors.response.use(
//     (config)=>{
//         return config
//     },
//     async (error)=>{
//         if (error.response.status=401){
//             const originalRequest=error.config
//             try {
//                 const {data}=await $authHost.get('auth/refresh',{withCredentials:true})
//                 localStorage.setItem('refresh',data.tokens.refresh_token)
//                 return $authHost.request(originalRequest)
//             } catch (error) {
//                 console.log('not auth')
//             }
             
//         }
//     }
// )
export {
    $host,
    $authHost
}