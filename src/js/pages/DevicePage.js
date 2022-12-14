import React, { useContext, useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import { Context } from "../..";
import { AiFillStar } from "react-icons/ai";
import pic from "../../assets/images/photoCard.png";
import "../../scss/components/gallery.scss";
import MyButton from "../UI/Button/MyButton";
import { fetchOneDevice } from "../https/deviceAPI";
import { useParams } from "react-router-dom";
import { sellerAdd } from "../https/basketAPI";
import { observer } from "mobx-react-lite";
import Modal from "../popup/Modal";
const DevicePage = observer(() => {
  const { user } = useContext(Context);
  const productI = useParams()
  const productId = Number(productI.id)
  const [uploadItem, setUploadItem] = useState({})
  const [amount, setCount] = React.useState(0);
  const result = async () => {
    let data
    data = await fetchOneDevice(productI.id).then(item => item)
    console.log(data)
    return data
  }

  useEffect(() => {
    result().then(item => setUploadItem(item))
  },
    []
  )

  //////////////////////////////////////////////////////////
  const [responce, setResponce] = useState({})
  const uploadBasket = async () => {
    try {
      let data
      data = await sellerAdd(amount, productId).then(data => data)
      setResponce(data)
      setModalactive(true)
      return data
    } catch (error) {
      if (error.response.status === 400) {
        setResponce(error)
        setModalactive(true)
      }
    }


  }
  ////// Modal popup  
  const [modalActive, setModalactive] = useState(true)

  console.log(responce)



  ////react-image-gallery
  const images = [
    {
      original: `${uploadItem.image_path}`,
      thumbnail: `${uploadItem.image_path}`,
    },
    {
      original: `${uploadItem.image_path}`,
      thumbnail: `${uploadItem.image_path}`,
    },
    {
      original: `${uploadItem.image_path}`,
      thumbnail: `${uploadItem.image_path}`,
    },
    {
      original: `${uploadItem.image_path}`,
      thumbnail: `${uploadItem.image_path}`,
    },
    {
      original: `${uploadItem.image_path}`,
      thumbnail: `${uploadItem.image_path}`,
    },
  ];

  return (
    <>
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
            <p style={{ color: "#262930" }}>??????????????????: ??????????????????</p>
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
              <p>12 ??????????????</p>
              <p>24 ????????????????????</p>
            </div>
            <p>

              ?????????????? ?????????????????????? ?????????????? ??????????????, ?? ?????????? ??????????????????????????
              ???????????????????????? ?? ???????????????????????? ?????????????? ?????????????????????????? ????????????????
              ??????????????????????????, ???????????????????? ???? ?????????? ???????????????????????? ?? ??????????????????????????. ??????
              ???????????????????????? ???????? ??????????????????-?????????????????????????? ???????????????? ?? ????????????????????????
              ?????????????? ?????????????????????????? ???????????????? ???????????????????????????? ??????????????????????????????????????
              ??????????????.{uploadItem.description}
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
                <p>{uploadItem.counts} ????????</p>
                <p>{uploadItem.price} tenge</p>
              </div>

            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "77px",
              }}
            >
              {/* <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <p>???????? 1:</p>
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
              <p>???????? 2:</p>
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
              <p>???????? 3:</p>
              <div
                style={{
                  backgroundColor: "#FFD699",
                  width: "48px",
                  height: "48px",
                  borderRadius: "5px",
                }}
              ></div>
            </div> */}
            </div>
            <div>
              <h2>???????????????????????????? ????????????????????</h2>
              <p>??????????????????, ??.??????-????????????, ?????????????????? 37</p>
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
              {(user.role) == 'provider' || (user.role) == ""
                ? <div></div>
                : <>
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
                        if (amount >= 1) {
                          setCount(amount - 1);
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
                      {amount}
                    </div>
                    <MyButton
                      style={{
                        width: "32px",
                        height: "32px",
                        backgroundColor: "#FFF",
                        color: "#00BCD4",
                      }}
                      onClick={() => {
                        setCount(amount + 1);
                      }}
                    >
                      +
                    </MyButton>
                  </div>
                  <div>{uploadItem.price * amount}????</div>
                  <div style={{ display: "flex", gap: "12px", marginLeft: "auto" }}>
                    <MyButton onClick={uploadBasket} style={{ width: "175px" }}>?? ??????????????</MyButton>

                  </div>
                </>}

            </div>
          </div>
        </div>

      </div>
      {(user.role) === 'seller' && (responce.status === 200)
        ? <Modal active={modalActive} setActive={setModalactive}>
          <p>?????????? ???????????????? ?? ??????????????</p>
        </Modal>
        : responce.response === undefined ? <p></p>
          : (user.role) === 'seller' && (responce.response.status === 400)
            ? <Modal active={modalActive} setActive={setModalactive}>
              <p>???????????????? ?? ?????????????? ??????</p>
            </Modal>
            : <p></p>}


    </>
  );
});

export default DevicePage;