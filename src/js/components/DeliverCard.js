import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Context } from '../..';
import '../../scss/components/dilever.scss';
import MyButton from '../UI/Button/MyButton';

const   DeliverCard = (props) => {
  function sumArray(array) {
    let sum = 0;
    const ourArray=[...props.products_amount]
    for (let i = 0; i < props.products_amount.length; i += 1) {
      sum += ourArray[i];
    }
    
    return sum;
  }
  const {basket}=useContext(Context)
  const navigate=useNavigate()
  const navi=()=>{
    navigate('/order/'+props.id)
  }
  return (
    <div style={{marginTop:'30px'}}>
        <div className="dileverCard">
        <div className='dileverCardText'>
          <div className='divelerCard Key'>
            Заказчик:  
          </div>
          <div className='dileverCard Mean'>
            ТОО НурАс
          </div>
        </div>
        <div className='dileverCardText'>
          <div className='divelerCard Key'>
          Номер заказа:
          </div>
          <div className='dileverCard Mean'>
          0205122341
          </div>
        </div>
        <div className='dileverCardText'>
          <div className='divelerCard Key'>
          Количество товара:
          </div>
          <div className='dileverCard Mean'>
          {sumArray(...props.products_amount)} шт.
          </div>
        </div>
        <div className='dileverCardText'>
          <div className='divelerCard Key'>
          Цена заказа:
          </div>
          <div className='dileverCard Mean'>
          {props.total_cost}₸
          </div>
        </div>
        <div style={{marginTop:"10px"}}>
          <MyButton onClick={navi}><NavLink style={{textDecoration:"none",color:'white'}} to="/order"> Открыть заказ </NavLink></MyButton>
        </div>
      </div>
    </div>
  )
}

export default DeliverCard