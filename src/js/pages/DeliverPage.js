import React from 'react'
import Deliver from '../components/Deliver'
import ProfileCard from '../components/ProfileCard'
import ProfileTopImage from '../components/ProfileTopImage'

const DeliverPage = () => {
  return (
    <div>
           <div className='TopImg'>
        <ProfileTopImage />
      </div   >
      <div className='Content' style={{display:'flex',justifyContent:''}}>
        <ProfileCard />
        <Deliver style={{marginTop:"30px"}} />
      </div>
    </div>
  )
}

export default DeliverPage