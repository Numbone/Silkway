import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from '../components/Product'
import ProfileCard from '../components/ProfileCard'
import ProfileTopImage from '../components/ProfileTopImage'
import UploadPage from './UploadPage'

const ProfilePage = () => {

  return (
    <div className='Wrapper'>
      <div className='TopImg'>
        <ProfileTopImage />
      </div   >
      <div className='Content' style={{display:'flex',justifyContent:'space-between'}}>
        <ProfileCard />
        <Product />
      </div>
    </div>
  )
}

export default ProfilePage