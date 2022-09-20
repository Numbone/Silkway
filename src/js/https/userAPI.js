import axios from "axios";
import jwtDecode from "jwt-decode";
import { $authHost,$host } from ".";


export const registration = async (address ,biiniin,name,organName,password,phone,role,username)=>{
    
    const {data}= await $host.post('auth/sign-up' ,{address ,biiniin,name,organName,password,phone,role,username})
    return data
}

export const login = async (username,password)=>{
   
const{ data} = await $host.post('auth/sign-in' ,{username,password })
    localStorage.setItem('token',data.tokens.access_token)
    return data
}
export const check = async ()=>{
    const {data} = await $authHost.get('api/auth/check' )
    localStorage.setItem('token',data.token)
    return (data.token)
}