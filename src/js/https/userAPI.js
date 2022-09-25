
import { $host } from ".";



export const registration = async (address ,biiniin,name,organName,password,phone,role,username)=>{
    
    const {data}= await $host.post('auth/sign-up' ,{address ,biiniin,name,organName,password,phone,role,username})
    return data
}

export const login = async (username,password)=>{
   
const{ data} = await $host.post('auth/sign-in' ,{username,password })
    localStorage.setItem('token',data.tokens.access_token)
    // localStorage.setItem('refresh',data.tokens.refresh_token)
    return data
}
export const check = async ()=>{
    const {data} = await $host.get('auth/refresh',{
        withCredentials:true
    } )
    localStorage.setItem('token',data.access_token)
    return (data.token)
}