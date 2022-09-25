import React, { useContext, useEffect, useState } from 'react'
import '../../scss/components/basketCard.scss';
import del from '../../assets/images/delete.png';
import MyButton from '../UI/Button/MyButton';
import { NavLink } from 'react-router-dom';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { providerOneTransaction } from '../https/basketAPI';
import deleteIcon from '../../assets/images/delete.png';
import star from '../../assets/images/Frame.png';
import rec from '../../assets/images/Rectangle.png';
import { $authHost } from '../https';

const Basket = observer(() => {
  const{basket}=useContext(Context)
  const [result, setResult] = useState({})
  const OrderId = async () => {
    const data = await providerOneTransaction(basket.onetransaction.id)
    return data
  }
  useEffect(() => {
    OrderId().then(item => setResult(item))
  }, [])
  console.log(basket)
  console.log(result)
  const sellerBuy=async(id)=>{
    const data =await $authHost.patch('api/seller/transaction/buy/'+id)
    console.log(data)
    return data
  }
  return (
    <div style={{ display: "flex" }}>
      <div className="leftSideBasket">
        <div className="topBasketCard">
          <div className="topBasketCardText">
            TOO - Билион Амстердамовсие
          </div>
          <div className="topBasketCardImg">
            <img src={del} alt="tab" />
          </div>
        </div>
        <div className='Line' >

          </div>
          {result.products_amount == null ?
          <div>Empty</div>
          : result.products_amount.map((item, index) =>

            <div className='Card Store' style={{marginLeft:'120px'}}>
              <div className='StoreCard'>
                <div className='storeImage'>
                  <img src={rec}></img>
                </div>
                <div className='StoreCardTextContent'>
                  <div className='TextContentTop'>
                    Sell Well is suitable for 2018 BMW 5 Series G30 G38 car high quality universal rear bumper diffuser
                  </div>
                  <div className='TextContentPrice'>
                    <div className='TextContentPriceText'>
                      id:{result.products_id[index]}
                    </div>
                    <div className='TextContent Star'>
                      <div className='StarImg'>
                        <img src={star}></img>
                      </div>
                      <div className='StartText'>
                        4.7
                      </div>
                    </div>
                  </div>
                  < div className='storeOpenOrder'>
                    <div className='cardOpenOrderleft'>
                      <div>
                        Цвет:
                      </div>
                      <div className='OpenOrderColor'>

                      </div>
                    </div>
                    <div className='cardOpenOrderright'>
                      <div>
                        90₸/шт
                      </div>
                      <div>
                        Количество:  {item}
                      </div>
                      <div>

                      </div>
                      <div>
                        <img src={deleteIcon}></img>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}
            
        
        
       
        
        
      </div>
      <div className="rightSideBasket">
        <div className="Korsina">
          <div className="KorsinaText">
            Корзина
          </div>
          <div className="KorsinaContent">
            <div className="KorsinaContentKey">
              Цена товаров:
            </div>
            <div className="KorsinaContentValue">
            {result.total_cost} ₸
            </div>
          </div>
          <div className="KorsinaContent" style={{ color: 'red' }}>
            <div className="KorsinaContentKey">
              Купон магазина:
            </div>
            <div className="KorsinaContentValue">
              -0 ₸
            </div>
          </div>
          <div className="LineKorsina">

          </div>
          <div className="KorsinaContent" >
            <div className="KorsinaContentKey">
            Итог:
            </div>
            <div className="KorsinaContentValue"> 
            {result.total_cost} ₸
            </div>
          </div>
          <div className="KorsinaContent" >
            <div className="KorsinaContentKey" style={{fontSize:'14px',marginTop:'0',paddingTop:'0'}}>
            (не учитывая доставку и налог)
            </div>
            <div className="KorsinaContentValue">
           
            </div>
          </div>
          <div>
            <MyButton  onClick={()=>{sellerBuy(basket.onetransaction.id)}} style={{width:'225px',fontSize:'16px',marginTop:'15px'}}>
              <NavLink style={{textDecoration:'none',color:'white'}} to="/basket2">
                Оформить заказ
                </NavLink>
                </MyButton>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Basket