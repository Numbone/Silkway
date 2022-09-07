import React from 'react'
import ProfileCard from '../components/ProfileCard'
import ProfileTopImage from '../components/ProfileTopImage'
import UploadCardContent from '../components/UploadCardContent'

const UploadPage = () => {
  return (
    <div>
      <div className='TopImg'>
        <ProfileTopImage />
      </div   >
      <div className='Content' style={{display:'flex',justifyContent:''}}>
        <ProfileCard  />
        <UploadCardContent style={{marginTop:"30px"}} />
      </div>
    </div>
  )
}

export default UploadPage