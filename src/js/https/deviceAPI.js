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

export const createDevice = async (name,category,price,info,img)=>{
    const {data}= await $authHost.post('api/device' ,{name,category,price,info,img})
    return data
}

export const fetchDevice= async ()=>{
    const {data} = await $host.get('products/all' ,{
        headers: {
            'content-type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
          }
    })
    return data
}

export const fetchOneDevice= async (id)=>{
    const {data} = await $host.get('products/'+id )
    return data
}