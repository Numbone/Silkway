import React, { useState } from 'react'
import '../../scss/components/uploadCard.scss';
import MyButton from '../UI/Button/MyButton';
import ps from '../../assets/images/Vector.png';
import pdf from '../../assets/images/PDF.png';
import { createDevice } from '../https/deviceAPI';
import { observer } from 'mobx-react-lite';
import axios from 'axios';
import { $authHost } from '../https';
import { useNavigate } from 'react-router-dom';
const UploadCardContent = observer(() => {
    const navigate=useNavigate()
    const addDevice= async()=>{
        // const data= $authHost.get("api/provider",{
        // headers: {
        //           'Content-Type': 'application/json'
        //         }})
        // console.log(data.split('/[^{}]+/g'))
        // return data
        // a
        navigate('/profile')
    }

    const [name,setName]=useState('')
    const [category,setCategory]=useState('')
    const [price,setPrice]=useState(0)
    const [info,setInfo]=useState('')
    const [file,setFile]=useState(null)

    const selectFile=(e)=>{
        setFile(e.target.files[0])
    }
    return (
        <div>
            <div className="Content">
                <div className="leftSide">
                    <div className='Title2' >
                        <h2>Добавить товар1</h2>
                    </div>

                    <div className='Container2'>
                        <div className='title'>
                            Название товара
                        </div>
                        <div className='Input'>
                            <input value={name} onChange={e=>setName(e.target.value)} className='place' placeholder='placeholder'></input>
                        </div>
                    </div>
                    <div className='Container2'>
                        <div className='title'>
                            Категория товара
                        </div>
                        <div className='Input'>
                            <input value={category} onChange={e=>setCategory(e.target.value)} className='place' placeholder='placeholder'></input>
                        </div>
                    </div>
                    <div className='Container2'>
                        <div className='title'>
                            Цена за штуку
                        </div>
                        <div className='Input'>
                            <input value={price} onChange={e=>{setPrice(e.target.value)}} className='place' placeholder='placeholder'></input>
                        </div>
                    </div>
                    <div className='ColorCard'>
                        <div className='title'>
                            <div className='Container2'>
                                
                                
                            </div>
                        </div>
                    </div>
                    <div className='Container2'>
                        <div className='title'>
                            Дополнительная информация
                        </div>
                        <div className='Input'>
                            <input value={info} onChange={e=>setInfo(e.target.value)} className='place' placeholder='placeholder' style={{ height: "101.59px" }}></input>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    <div className='TopRight'>
                        <MyButton onClick={addDevice}> Добавить товар</MyButton>
                    </div>
                    <div className='DragContainer'>
                        <input type='file' onChange={selectFile} id='file' style={{display:'none'}}></input>
                        <label for='file'> 
                            <div className='DragText'>
                            <div className='DragText Top'>
                                <strong>Upload Your File</strong>
                            </div>
                            <div className='DragText Bottom'>
                                Select the following format
                                PNG,JPEG,DOCX,PDF
                            </div>
                        </div>
                        
                        <div className="DragContainerImage">
                            <div className="DragImage">
                                <img className='Img' src={ps}></img>
                                <div className="DragText">
                                    <span className='DragColor'>Drag drop</span> your file here or <span className='DragColor'>Browse</span>
                                </div>
                            </div>
                        </div>
                        </label>
                    </div>
                   
                    <div className="BottomRight">
                       
                      
                    </div>
                </div>
            </div>

        </div >
    )
})

export default UploadCardContent