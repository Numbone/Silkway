import React, { useContext, useEffect, useState } from 'react'
import '../../scss/components/openOrder.scss';
import deleteIcon from '../../assets/images/delete.png';
import star from '../../assets/images/Frame.png';
import rec from '../../assets/images/Rectangle.png';
import exclaim from '../../assets/images/exami.png';
import gazel from '../../assets/images/gazel.png';
import MyButton from '../UI/Button/MyButton';
import { Context } from '../..';
import { $authHost } from '../https';
import { useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { providerOneTransaction, sellerSentId } from '../https/basketAPI';

const OpenOrder = () => {
  const [result, setResult] = useState({})
  const [location,setLocation]=useState("")
  const navigate = useNavigate()
  const param = useParams()
  const { basket, device, user } = useContext(Context)
  const OrderId = async () => {
    const data = await providerOneTransaction(param.id)
    basket.setOneTransaction(data)

    return data
  }
  useEffect(() => {
    OrderId().then(item => setResult(item))
  }, [])
  const SendOrder = async (id) => {
    const data = await $authHost.patch('api/' + user.role + '/transaction/accept/' + id)
    return data
  }
  function naviForSellerAndProvider(role){
    if (role=="seller"){
      return navigate('/basket')
    }else if (role=="provider"){
      return navigate('/basket2')
    }
  }
  
  const navi=(id)=>{
    SendOrder(id)
    naviForSellerAndProvider(user.role)
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
        {result.products_amount == null ?
          <div>Empty</div>
          : result.products_amount.map((item, index) =>

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
      <div className="rightSideOrder">
        <div className='rightDeliverContent'>
          <div style={{ fontSize: '20px', color: '#1B1D28', marginBottom: '15px' }}>
            Доставка
          </div>
          <div className='OrderRightText'>
            <div>
              Кол-во товаров:
            </div>
            <div>
              {/* {sumArray(result.products_amount)} */}кол
            </div>
          </div>
          <div className='OrderRightText'>
            <div>
              Цена :
            </div>
            <div>
              {result.total_cost} ₸
            </div>
          </div>
          <div style={{ marginTop: '30px' }} >
            <MyButton onClick={() => { navi(basket.onetransaction.id) }}>Отправить заказ для потверждение</MyButton>
          </div>
        </div>

      </div>

    </div>
  )
}

export default observer(OpenOrder)