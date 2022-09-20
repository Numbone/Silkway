import React from 'react'
import BasketCard from '../components/BasketCard';
import '../../scss/components/basketCard.scss';
import del from '../../assets/images/delete.png';
import MyButton from '../UI/Button/MyButton';
import { NavLink } from 'react-router-dom';

const Basket = () => {
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
        <BasketCard />
        <BasketCard />
       
        
        
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
              1 572 ₸
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
            1 572 ₸
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
            <MyButton style={{width:'225px',fontSize:'16px',marginTop:'15px'}}><NavLink style={{textDecoration:'none',color:'white'}} to="/basket2">Оформить заказ</NavLink></MyButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Basket