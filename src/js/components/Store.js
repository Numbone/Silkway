import React from 'react'
import MyButton from '../UI/Button/MyButton'
import Card from './Card'
import '../../scss/components/store.scss';
import StoreCard from './StoreCard';
import { NavLink } from 'react-router-dom';

const Store = () => {
  return (
    <div >
      <div className='storeTopSide'>
        <div className='storeT'>
          Склад
        </div>
        <div>
          <MyButton style={{ fontSize: "14px" }}>Добавить товар</MyButton>
        </div>
      </div>
      <div className='CountStore'>
        <div className='storeTextBlock'>
          <div >
            Товары: 34
          </div>
          <div>
            Количество шт. товара: 1200 ( -120 сегодня )
          </div>
        </div>
        <div>
          
          <NavLink to="/statistic" style={{ textDecoration:"none" }}><MyButton style={{ fontSize: "14px", marginRight: "40px" }}>Открыть статистику склада</MyButton></NavLink>
        </div>
      </div>
      <div className='searchStore' style={{marginBottom:"30px"}}>
        <input type="search" className="nosubmit" placeholder='Что вы ищите' style={{ border: "none" }} />
      </div>
      <div >
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </div>
    </div>
  )
}

export default Store