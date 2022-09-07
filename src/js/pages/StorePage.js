import React from 'react'
import ProfileCard from '../components/ProfileCard'
import ProfileTopImage from '../components/ProfileTopImage'
import Store from '../components/Store'

const StorePage = () => {
  return (
    <div>
        <div className='TopImg'>
        <ProfileTopImage />
      </div   >
      <div className='Content' style={{display:'flex',justifyContent:''}}>
        <ProfileCard  />
        <Store style={{marginTop:"30px"}} />
      </div>
    </div>
  )
}

export default StorePage