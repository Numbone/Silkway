import React from 'react'
import ReactImageGallery from 'react-image-gallery'
const GalletyImage = () => {
    const images=[
        {
            original: '../../assets/images/1.png',
            thumbnail: '../../assets/images/2.png',
          },
          {
            original: '../../assets/images/1.png',
            thumbnail: '../../assets/images/3.png',
          },

          {
            original: '../../assets/images/1.png',
            thumbnail: '../../assets/images/4.png',
          },

          {
            original: '../../assets/images/1.png',
            thumbnail: '../../assets/images/5.png',
          },


    ]
  return (
    <div>
        <ReactImageGallery items={images}/>
    </div>
  )
}

export default GalletyImage