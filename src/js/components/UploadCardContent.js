import React, { useState } from 'react'
import '../../scss/components/uploadCard.scss';
import MyButton from '../UI/Button/MyButton';
import ps from '../../assets/images/Vector.png';
import { observer } from 'mobx-react-lite';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Modal from '../popup/Modal';

const UploadCardContent = observer(() => {
    const category_id = 1
    const unit_id = 1

    const navigate = useNavigate()
    //// formik
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState()
    const [description, setInfo] = useState('')
    const [counts, setCounts] = useState()
    const [file, setFile] = useState(null)
    /////modal popup
    const [modalActive, setModalactive] = useState(true)
    const [result, setResult] = useState({})

    /////selecFile IMG
    const selectFile = (e) => {
        setFile(e.target.files[0])
    }

    ////// upload item button
    const addDevice = async (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('category_id', category_id)
        formData.append('counts', counts)
        formData.append('description', description)
        formData.append('name', name)
        formData.append('price', price)
        formData.append('unit_id', unit_id)
        formData.append('file', file)

        axios({
            url: `https://api.silkway.systems/api/provider/products/create`,
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            data: formData
        }).then(function (response) {
            setResult(response)
            console.log(result);
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <main>
                <form>
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
                                    <input value={name} onChange={e => setName(e.target.value)} className='place' placeholder='placeholder'></input>
                                </div>
                            </div>
                            <div className='Container2'>
                                <div className='title'>
                                    Категория товара
                                </div>
                                <div className='Input'>
                                    <input placeholder='0' value={category} onChange={e => setCategory(e.target.value)} className='place' ></input>
                                </div>
                            </div>
                            <div className='Container2'>
                                <div className='title'>
                                    Цена за штуку
                                </div>
                                <div className='Input'>
                                    <input placeholder='0' value={(price)} onChange={e => { setPrice(Number(e.target.value)) }} className='place' ></input>
                                </div>
                            </div>
                            <div className='Container2'>
                                <div className='title'>
                                    Количество товара
                                </div>
                                <div className='Input'>
                                    <input value={counts} onChange={e => { setCounts(Number(e.target.value)) }} className='place' placeholder='placeholder'></input>
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
                                    <input value={description} onChange={e => setInfo(e.target.value)} className='place' placeholder='placeholder' style={{ height: "101.59px" }}></input>
                                </div>
                            </div>
                        </div>
                        <div className="rightSide">
                            <div onClick={() => setModalactive(true)} className='TopRight'>
                                <MyButton onClick={addDevice}> Добавить товар</MyButton>
                            </div>
                            <div className='DragContainer'>
                                <input type='file' onChange={selectFile} id='file' style={{ display: 'none' }}></input>
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

                </form >
            </main>
            {
                (result.status === undefined)
                    ? <p></p>
                    : (result.status === 200)
                        ? <Modal active={modalActive} setActive={setModalactive}>
                            Товар добавлен
                        </Modal>
                        : <p></p>
            }

        </>
    )
})

export default UploadCardContent