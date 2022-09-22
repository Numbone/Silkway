import axios from 'axios'
import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../..'
import { $authHost } from '../https'
import MyButton from '../UI/Button/MyButton'
import Card from './Card'


const Product = observer(() => {
    const navigate=useNavigate()
    const { device } = useContext(Context)
    const fetchProviderProduct= async()=>{
        const {data} =await $authHost.get('api/provider/',{
                "Access-Control-Allow-Origin": "*",
            })
            console.log(data.products)
            return data.products.data
    }   
    useEffect(()=>{
        fetchProviderProduct().then(item=>device.setProviderDevice(item))
       
    },[])
   
  return (
    <div>
           <div className="profile__content">
                    <div className="pc__top">
                        <div className="products__profile">Товары</div>
                        <div onClick={()=>{
                            navigate("/uploadItem")
                        }} className="pc__btn">
                            <MyButton  >Добавить товар</MyButton>
                        </div>
                    </div>
                    <div className="card_products"  >
                    {device._providerDevice.map(item=>
                    
                        <Card   img={item.image_path}
                                title={item.name}
                                price={item.price}
                                rate={item.rate}
                                key={item.id}
                                status={item.status}
                                description={item.description}
                                id={item.id}
                                />
                    )}
                    </div>
                </div>
    </div>
  )
})

export default Product