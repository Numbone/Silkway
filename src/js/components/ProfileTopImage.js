import React from 'react'
import pf from '../../assets/images/profileAvatar.png';
import bc from '../../assets/images/Frame9.png';
import '../../scss/components/profileCard.scss';
const ProfileTopImage = () => {
  return (
    <div>
        <div className='bc__profile'>
                <img className="bc" style={{ width: "100%", height: "200px" }} src={bc} alt="hren" />
                <img className="avatar" src={pf} alt="hren" />
            </div>
    </div>
  )
}

export default ProfileTopImage