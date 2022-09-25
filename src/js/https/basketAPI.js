
import { $authHost } from "."


// seler Transaction
export const sellerAdd =async(amount,productId)=>{
    const data =await $authHost.post('api/seller/transaction/add',{amount,productId})
    return data
}

export const sellerBuy=async()=>{
    const data =await $authHost.post('api/seller/transaction/buy',{})
    return data
}

export const sellerConfirm=async(id)=>{
    const data =await $authHost.post('api/seller/transaction/confirm/'+id,{})
    return data
}

export const sellerCurrent=async()=>{
    const {data}=await $authHost.get('api/seller/transaction/current')
    return data
}

export const sellerDelete=async(id)=>{
    const data =await $authHost.delete('api/seller/transaction/'+id,{id})
    return data
}
export const sellerSentId=async(id)=>{
    const data =await $authHost.patch('api/seller/transaction/accept/'+id)
    return data
}

// provider Transaction


export const providerTransaction = async()=>{
    const data =await $authHost.get('api/provider/transaction/')
    return data
}
export const providerOneTransaction = async(id)=>{
const {data }=await $authHost.get('api/transaction/'+id)
    return data
}

export const providerSend=async(id)=>{
    const data = await $authHost.post('api/provider/transaction/send/'+id,{id})
}

