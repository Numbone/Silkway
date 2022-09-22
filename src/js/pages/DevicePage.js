import React, { useContext, useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import { Context } from "../..";
import { AiFillStar } from "react-icons/ai";
import pic from "../../assets/images/photoCard.png";
import "../../scss/components/gallery.scss";
import Card from "../components/Card";
import MyButton from "../UI/Button/MyButton";
import { fetchOneDevice } from "../https/deviceAPI";
import { useParams } from "react-router-dom";
import { upload } from "@testing-library/user-event/dist/upload";


const DevicePage = () => {
  const { device } = useContext(Context);
  const param=useParams()
  const [uploadItem,setUploadItem]=useState({})
  const [count, setCount] = React.useState(0);
  const result = async()=>{
        let data
        data= await fetchOneDevice(param.id).then(item=>item)
        
        return data
    }
  useEffect(()=>{
    result().then(item=>setUploadItem(item))},
    []
  )
 
  console.log(uploadItem)
  const images = [
    {
      original: `${uploadItem.image_path}`,
      thumbnail: `${pic}`,
    },
    {
      original: `${pic}`,
      thumbnail: `${uploadItem.image_path}`,
    },
    {
      original: `${pic}`,
      thumbnail: `${pic}`,
    },
    {
      original: `${pic}`,
      thumbnail: `${pic}`,
    },
    {
      original: `${pic}`,
      thumbnail: `${pic}`,
    },
  ];

  return (
    <div className="gallery">
      <div style={{ display: "flex", gap: "25px" }}>
        <div className="gallery-left">
          <ImageGallery
            items={images}
            showPlayButton={false}
            showNav={false}
            showFullscreenButton={false}
            disableKeyDown={true}
          />
        </div>

        <div
          className="gallery-right"
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "800px",
              lineHeight: "24px",
            }}
          >
            {uploadItem.name}
          </h2>
          <p style={{ color: "#262930" }}>Категория: Косметика</p>
          <div style={{ display: "flex", gap: "35px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "14px",
              }}
            >
              <AiFillStar className="icon" style={{ color: "#33C9DD" }} />
              <AiFillStar className="icon" style={{ color: "#33C9DD" }} />
              <AiFillStar className="icon" style={{ color: "#33C9DD" }} />
              <AiFillStar className="icon" style={{ color: "#33C9DD" }} />
              <AiFillStar className="icon" style={{ color: "#33C9DD" }} />
              <p style={{ fontWeight: "800" }}>4.5</p>
            </div>
            <p>12 отзывов</p>
            <p>24 покупателя</p>
          </div>
          <p>
            {uploadItem.description}
            Идейные соображения высшего порядка, а также перспективное
            планирование в значительной степени обусловливает важность
            экспериментов, поражающих по своей масштабности и грандиозности. Для
            современного мира социально-экономическое развитие в значительной
            степени обусловливает важность переосмысления внешнеэкономических
            политик.
          </p>
          <div
            style={{
              display: "flex",
              gap: "95px",
              borderTop: "1px solid #DEE6EE",
              borderBottom: "1px solid #DEE6EE",
              padding: "18px 0",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <p>{uploadItem.counts} Штук</p>
              <p>$65 - $80</p>
            </div>
            
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "77px",
            }}
          >
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <p>Цвет 1:</p>
              <div
                style={{
                  backgroundColor: "#76777E",
                  width: "48px",
                  height: "48px",
                  borderRadius: "5px",
                }}
              ></div>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <p>Цвет 2:</p>
              <div
                style={{
                  backgroundColor: "#FF9B9B",
                  width: "48px",
                  height: "48px",
                  borderRadius: "5px",
                }}
              ></div>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <p>Цвет 3:</p>
              <div
                style={{
                  backgroundColor: "#FFD699",
                  width: "48px",
                  height: "48px",
                  borderRadius: "5px",
                }}
              ></div>
            </div>
          </div>
          <div>
            <h2>Дополнительная информация</h2>
            <p>Казахстан, г.Нур-султан, Малайсары 37</p>
            <p>+7 (777) 777-77-77</p>
            <p>tooNuras@gmail.com</p>
          </div>

          <div
            style={{
              display: "flex",
              gap: "30px",
              marginTop: "auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <MyButton
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#FFF",
                  color: "#00BCD4",
                }}
                onClick={() => {
                  if (count >= 1) {
                    setCount(count - 1);
                  }
                }}
              >
                -
              </MyButton>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#00BCD4",
                  color: "#FFF",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {count}
              </div>
              <MyButton
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#FFF",
                  color: "#00BCD4",
                }}
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                +
              </MyButton>
            </div>
            <div>{uploadItem.price*count}ТГ</div>
            <div style={{ display: "flex", gap: "12px", marginLeft: "auto" }}>
              <MyButton style={{ width: "175px" }}>В корзину</MyButton>
              <MyButton style={{ width: "175px" }}>Купить</MyButton>
            </div>
          </div>
        </div>
      </div>
      <div className="products">Может понравится</div>
      <button></button>

      <div className="cards">
        {device._devices.map((item) => (
          <Card
            img={item.img}
            title={item.title}
            price={item.price}
            rate={item.rate}
          />
        ))}
      </div>
    </div>
  );
};

export default DevicePage;