import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../..'
import '../../scss/components/dilever.scss';
import { $authHost } from '../https';
import { providerTransaction } from '../https/basketAPI';
import DeliverCard from './DeliverCard';
const Deliver = observer(() => {
  const { basket, user } = useContext(Context)
  const [result, setResult] = useState([])
  ///// async requrst to getOrder
  const getOrder = async () => {
    const { data } = await $authHost.get('api/' + user.role + '/' + 'transaction/')
    basket.setTransaction(data)
    console.log(data)
    return data
  }

  useEffect(() => {
    getOrder().then(data => setResult(data))
  }, [])


  return (
    <div>
      <div className='storeTopSide'>
        <div className='storeT'>
          Заказы
        </div>
      </div>
      <div className='searchStore' style={{ marginBottom: "30px", marginTop: "30px" }}>
        <input type="search" className="nosubmit" placeholder='Что вы ищите' style={{ border: "none" }} />
      </div>
      <div className='DeliverCardContent'>
        {result == null
          ? <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'500px'}}>You don't have item in basket</div>
          : result.map(item =>
            <DeliverCard
              id={item.id}
              products_amount={item.products_amount}
              products_id={item.products_id}
              provider_id={item.provider_id}
              seller_id={item.seller_id}
              total_cost={item.total_cost}
              key={item.id}
              status={item.status} />)}


      </div>

    </div>
  )
})
export default Deliver