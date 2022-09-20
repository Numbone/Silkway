import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../..'
import { $authHost } from '../https'
import MyButton from '../UI/Button/MyButton'
import Card from './Card'


const Product = () => {
    const navigate=useNavigate()
    const { device } = useContext(Context)
    const fetchProviderProduct= async()=>{
            const {data} =await $authHost.get('api/provider/products/user')
            console.log(data.data)

        
    }
    // useEffect(()=>{
    //     fetchProviderProduct().then(data=>device.setProviderDevice(data.data))
    // },[])
  return (
    <div>
           <div className="profile__content">
                    <div className="pc__top">
                        <div className="products__profile">Товары</div>
                        <div onClick={()=>{
                            // navigate("/uploadItem")
                        }} className="pc__btn">
                            <MyButton onClick={fetchProviderProduct}>Добавить товар</MyButton>
                        </div>
                    </div>
                    <div className="card_products"  >
                    {device._devices.map(item=>
                    
                        <Card   img={item.img}
                                title={item.title}
                                price={item.price}
                                rate={item.rate}
                                key={item.id}/>
                    )}
                    </div>
                </div>
    </div>
  )
}

export default Product