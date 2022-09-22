import React from 'react'
import '../../scss/components/openOrder.scss';
import deleteIcon from '../../assets/images/delete.png';
import star from '../../assets/images/Frame.png';
import rec from '../../assets/images/Rectangle.png';
import exclaim from '../../assets/images/exami.png';
import gazel from '../../assets/images/gazel.png';
import MyButton from '../UI/Button/MyButton';
const OpenOrder = () => {
  const navi=()=>{
    console.log('damir krasacvh')
  }
  return (
    <div className="orderBasic">
      <div className="leftSideOrder">
        <div className='TopSideOrder'>
          <div className='TopSideOrderTop'>
            <div className='TopSideOrderText'>
              Заказ
            </div>
            <div className='TopSideOrderClosed'>
              <img src={deleteIcon}></img>
            </div>
          </div>
          <div className='LineOrder'>

          </div>
        </div>
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
        <div className='Logistic'>
          <div className='LogisticTop'>
            <div className='LogisticText'>
              <div>
                <img src={exclaim}></img>
              </div>
              <div style={{ marginLeft: "5px" }}>
                Информация о логистике должна быть подтверждена
              </div>
            </div>
            <div className='LogisticTextBlue'>
              Чат с заказчиком
            </div>
          </div>
          <div className='LineOrder'>
          </div>
          <div className='ContentCardOpenOrder'>
            <div className='ColumnCardOpenOrder'>
              <div className='KeyOrder'>
                Методы доставки
              </div>
              <div className='ValueOrder'>
                <img src={gazel}></img>
                <div style={{ marginLeft: '10px' }}>Газель</div>

              </div>
            </div>
            <div className='ColumnCardOpenOrder'>
              <div className='KeyOrder'>
                Время доставки
              </div>
              <div className='ValueOrder'>
                <div className="ValueOrderContent">
                  <div>
                    Оплата
                  </div>
                  <div>
                    Отправка
                  </div>
                  <div>
                    Прием
                  </div>
                </div>
              </div>
            </div>
            <div className='CircleLineContent'>
              <div className="circle">

              </div>
              <div className="circleLine">

              </div>
              <div className="circle">

              </div>
              <div className="circleLine">

              </div>
              <div className="circle">

              </div>
            </div>
            <div className=" ContentBottomLine">
              <div>
                Оплата после получения
              </div>
              <div style={{ marginLeft: "89px" }} >
                В течение 5 р.д.
              </div>
            </div>

          </div>
        </div>
        <div className='Logistic'>
          <div className='LogisticTop'>
            <div className='LogisticText'>
              <div>
                <img src={exclaim}></img>
              </div>
              <div style={{ marginLeft: "5px" }}>
                Выбор оплаты заказчика
              </div>
            </div>
            <div className='LogisticTextBlue'>
              Чат с заказчиком
            </div>
          </div>
          <div className='LineOrder'>
          </div>
          <div className='ContentCardOpenOrder'>
            <div className='ColumnCardOpenOrder'>
              <div className='KeyOrder'>
                Способы оплаты
              </div>
              <div className='ValueOrder'>
                <div className='CheckBoxOrder'>
                  <div className='radioOrder' style={{ backgroundColor: ' #33C9DD', border: "none" }}>

                  </div>
                  <div className='OrderText'>
                    Наличными (при получении товара)
                  </div>

                </div>
                <div className='CheckBoxOrder' style={{ marginLeft: '20px' }}>
                  <div className='radioOrder'>

                  </div>
                  <div className='OrderText'>
                    Консигнация
                  </div>

                </div>
                <div className='CheckBoxOrder'>
                  <div className='radioOrder'>

                  </div>
                  <div className='OrderText'>
                    Банковский перевод
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
        <div className='AdditionalInformation'>
          <div className='Addleft'>
            Дополнительная информация от заказчика
          </div>
          <input className='Addright' placeholder='Мне бы хотелось принять доставку моего заказа немного быстрее.'>
            
          </input>

        </div>
      </div>
      <div className="rightSideOrder">
          <div className='rightDeliverContent'>
            <div style={{fontSize:'20px',color:'#1B1D28',marginBottom:'15px'}}>
              Доставка
            </div>
            <div className='OrderRightText'>
              <div>
              Кол-во товаров:
              </div>
              <div>
              460
              </div>
            </div>
            <div className='OrderRightText'>
              <div>
              Цена доставки:
              </div>
              <div>
              100 ₸
              </div>
            </div>
            <div style={{marginTop:'30px'}} >
              <MyButton onClick={navi}>Заказ отправлен</MyButton>
            </div>
          </div>

      </div>

    </div>
  )
}

export default OpenOrder