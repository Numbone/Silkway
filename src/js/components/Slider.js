import React from 'react';
import  { useEffect, useState, useRef } from 'react';
import '../../scss/components/slider.scss';



// const pictures = [
//   {
//   imgPath: 'https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?format=jpg&quality=90&v=1614559651'
//   },
//   {
//   imgPath: require('../../assets/images/images2.jpg')
//   },
//   {
//    imgPath: require('../../assets/images/images3.jpg')
//   },
//   {
//     imgPath: require('../../assets/images/images4.jpg')
//   },
//   {
//     imgPath: require('../../assets/images/images5.jpg')
//   },
// ];
// const delay = 2500;

 const pictures = [
  "https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?format=jpg&quality=90&v=1614559651", 
  "https://cdn-blog.credihealth.com/wp-content/webp-express/webp-images/uploads/2018/08/9454520-1024x743.jpg.webp", 
  "https://cdn.thewirecutter.com/wp-content/media/2022/06/android-phone-2048px-0004-3x2-1.jpg?auto=webp&quality=60&crop=1.91:1&width=1200", 
  "https://it4profit.com/share/common/201230/cq5dam.web.1280.1280.jpeg", 
  'https://it4profit.com/share/common/201230/image.jpg'
];
 const delay = 2500;

 

const Slider = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slider-wrapper">
      <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {pictures.map((imgPath, index) => (
          <img
            alt='slider img'
            className="slide"
            key={index}
            src={imgPath}
          ></img>
        ))}
      </div>

      <div className="slideshowDots">
        {pictures.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Slider;