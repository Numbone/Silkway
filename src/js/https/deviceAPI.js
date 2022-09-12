import jwtDecode from "jwt-decode";
import { $authHost,$host } from ".";

export const createType = async (type)=>{
    const {data}= await $authHost.post('api/type' ,type)
    return data
}

export const fetchType= async ()=>{
    const {data} = await $host.get('api/type' )
    return data
}

export const createDevice = async (device)=>{
    const {data}= await $authHost.post('api/device' ,device)
    return data
}

export const fetchDevice= async ()=>{
    const {data} = await $host.get('api/device' )
    return data
}

export const fetchOneDevice= async (id)=>{
    const {data} = await $host.get('api/device/'+id )
    return data
}