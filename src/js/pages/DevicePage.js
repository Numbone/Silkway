import React from 'react'
import GalletyImage from '../components/GalletyImage'

const DevicePage = () => {
  const device={
    id:1,
    title:'Sell Well is suitable for 2018 BMW 5 Series G30 G38 car high quality universal rear bumper diffuser',
    price:'$65 - $80',
    rate:'4.7',
    img:'data:image/jpeg;base64,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'
}
  return (
    <div>
        <div className="gallery_Image">
          <GalletyImage/>
        </div>
    </div>
  )
}

export default DevicePage