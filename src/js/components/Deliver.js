import React from 'react'

import '../../scss/components/dilever.scss';
import DeliverCard from './DeliverCard';
const Deliver = () => {
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
        <DeliverCard />
        <DeliverCard/>
        <DeliverCard/>
        <DeliverCard/>
        <DeliverCard/>
     </div>
      
    </div>
  )
}

export default Deliver