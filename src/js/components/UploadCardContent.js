import React, { useState } from 'react'
import '../../scss/components/uploadCard.scss';
import MyButton from '../UI/Button/MyButton';
import ps from '../../assets/images/Vector.png';
import pdf from '../../assets/images/PDF.png';
const UploadCardContent = () => {
    const [drag, setDrag] = useState()
    function dragStartHandler(e) {
        e.preventDefault()
        setDrag(true)
    }
    function dragLeaveHandler(e) {
        e.preventDefault()
        setDrag(false)
    }
    return (
        <div>
            <div className="Content">
                <div className="leftSide">
                    <div className='Title2'>
                        <h2>Добавить товар</h2>
                    </div>

                    <div className='Container2'>
                        <div className='title'>
                            Название товара
                        </div>
                        <div className='Input'>
                            <input className='place' placeholder='placeholder'></input>
                        </div>
                    </div>
                    <div className='Container2'>
                        <div className='title'>
                            Категория товара
                        </div>
                        <div className='Input'>
                            <input className='place' placeholder='placeholder'></input>
                        </div>
                    </div>
                    <div className='Container2'>
                        <div className='title'>
                            Цена за штуку
                        </div>
                        <div className='Input'>
                            <input className='place' placeholder='placeholder'></input>
                        </div>
                    </div>
                    <div className='ColorCard'>
                        <div className='title'>
                            <div className='Container2'>
                                <div className='title'>
                                    Выберите цвета
                                </div>
                                <div className='ColorBlock'>
                                    <div className='ColorContent'>
                                        <div className='ColorTitle'>
                                            Цвет 1:
                                        </div>
                                        <div className='ColorDiv'>

                                        </div>

                                    </div>
                                    <div className='ColorContent'>
                                        <div className='ColorTitle'>
                                            Цвет 2:
                                        </div>
                                        <div className='ColorDiv' style={{backgroundColor:"#FF9B9B"}}>

                                        </div>

                                    </div>
                                    <div className='ColorContent'>
                                        <div className='ColorTitle'>
                                            Цвет 3:
                                        </div>
                                        <div className='ColorDiv' style={{backgroundColor:"#FFD699"}}>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Container2'>
                        <div className='title'>
                            Дополнительная информация
                        </div>
                        <div className='Input'>
                            <input className='place' placeholder='placeholder' style={{ height: "101.59px" }}></input>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    <div className='TopRight'>
                        <MyButton> Добавить товар</MyButton>
                    </div>
                    <div className='DragContainer'>
                        <div className='DragText'>
                            <div className='DragText Top'>
                                <strong>Upload Your File</strong>
                            </div>
                            <div className='DragText Bottom'>
                                Select the following format
                                PNG,JPEG,DOCX,PDF
                            </div>
                        </div>
                        <div
                            onDragStart={e => dragStartHandler(e)}
                            onDragLeave={e => dragLeaveHandler(e)}
                            onDragOver={e => dragStartHandler(e)}
                            className="DragContainerImage">
                            <div className="DragImage">
                                <img className='Img' src={ps}></img>
                                <div className="DragText">
                                    <span className='DragColor'>Drag drop</span> your file here or <span className='DragColor'>Browse</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="BottomRight">
                        <div className='title' style={{ marginLeft: "100px" }}>
                            Uploading Files
                        </div>
                        <div className="UploadingFiles">
                            <div className="UploadImage">
                                <img src={pdf} alt="" />
                            </div>
                            <div className="UploadContent">
                                <div className="UploadText">
                                    <div className="UploadTitle">
                                        <div className="UploadText">
                                        Resume.pdf
                                        </div>
                                        <div className="UploadText">
                                        Delete
                                        </div>
                                    </div>
                                    <div className="UploadLine" style={{width:"157px"}}>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="UploadingFiles">
                            <div className="UploadImage">
                                <img src={pdf} alt="" />
                            </div>
                            <div className="UploadContent">
                                <div className="UploadText">
                                    <div className="UploadTitle">
                                        <div className="UploadText">
                                        Resume.pdf
                                        </div>
                                        <div className="UploadText">
                                        Delete
                                        </div>
                                    </div>
                                    <div className="UploadLine" style={{backgroundColor:"#00BCD4"}}>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="UploadingFiles">
                            <div className="UploadImage">
                                <img src={pdf} alt="" />
                            </div>
                            <div className="UploadContent">
                                <div className="UploadText">
                                    <div className="UploadTitle">
                                        <div className="UploadText">
                                        Resume.pdf
                                        </div>
                                        <div className="UploadText">
                                        Delete
                                        </div>
                                    </div>
                                    <div className="UploadLine" style={{backgroundColor:"#4CAF50"}}>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="UploadingFiles">
                            <div className="UploadImage">
                                <img src={pdf} alt="" />
                            </div>
                            <div className="UploadContent">
                                <div className="UploadText">
                                    <div className="UploadTitle">
                                        <div className="UploadText">
                                        Resume.pdf
                                        </div>
                                        <div className="UploadText">
                                        Retry
                                        </div>
                                    </div>
                                    <div className="UploadLine" style={{backgroundColor:"white"}}>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default UploadCardContent