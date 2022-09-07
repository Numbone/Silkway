import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../..'
import MyButton from '../UI/Button/MyButton'
import Card from './Card'


const Product = () => {
    const navigate=useNavigate()
    const { device } = useContext(Context)
  return (
    <div>
           <div className="profile__content">
                    <div className="pc__top">
                        <div className="products__profile">Товары</div>
                        <div onClick={()=>{
                            navigate("/uploadItem")
                        }} className="pc__btn">
                            <MyButton>Добавить товар</MyButton>
                        </div>
                    </div>
                    <div className="card_products"  >
                    {device._devices.map(item=>
                    
                        <Card   img={item.img}
                                title={item.title}
                                price={item.price}
                                rate={item.rate}/>
                    )}
                    </div>
                </div>
    </div>
  )
}

export default Product