import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../..'
import '../../scss/components/dilever.scss';
import { $authHost } from '../https';
import { providerTransaction } from '../https/basketAPI';
import DeliverCard from './DeliverCard';
const Deliver = observer(() => {
//   export const providerTransaction = async()=>{
//     const data =await $authHost.get('api/provider/transaction/')
//     return data
// }


  const {basket,user}=useContext(Context)
  const [result,setResult]=useState([])
  console.log(user.role)
  const getOrder=async()=>{
     const {data} = await $authHost.get('api/'+user.role+'/'+'transaction/')
     basket.setTransaction(data)
     return data
  }
  
  useEffect(()=>{
    getOrder().then(data=>setResult(data))
  },[])
  
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
    {result==null
    ?<div>Empty</div>
     :result.map(item=>
      <DeliverCard 
      id={item.id}
      products_amount={item.products_amount}
      products_id={item.products_id}
      provider_id={item.provider_id}
      seller_id={item.seller_id}
      total_cost={item.total_cost}
      key={item.id}/> )}
       
        
     </div>
      
    </div>
  )
})
export default Deliver