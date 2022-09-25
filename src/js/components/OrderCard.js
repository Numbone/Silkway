import React from 'react'
import deleteIcon from '../../assets/images/delete.png';
import star from '../../assets/images/Frame.png';
import rec from '../../assets/images/Rectangle.png';
import '../../scss/components/openOrder.scss';
const OrderCard = () => {
  return (
    <div>
        <div className='Card Store'>
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
                  65 ₸ - 80 ₸
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
                    65 ₸/шт
                  </div>
                  <div>
                    Количество: 230
                  </div>
                  <div>
                    Итог: 1 572 ₸
                  </div>
                  <div>
                    <img src={deleteIcon}></img>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default OrderCard