import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../scss/components/dilever.scss';
import MyButton from '../UI/Button/MyButton';

const DeliverCard = () => {
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
          1 500 шт.
          </div>
        </div>
        <div className='dileverCardText'>
          <div className='divelerCard Key'>
          Цена заказа:
          </div>
          <div className='dileverCard Mean'>
          1 500 000₸
          </div>
        </div>
        <div style={{marginTop:"10px"}}>
          <MyButton><NavLink style={{textDecoration:"none",color:'white'}} to="/order"> Открыть заказ </NavLink></MyButton>
        </div>
      </div>
    </div>
  )
}

export default DeliverCard