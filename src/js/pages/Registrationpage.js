import React, { useContext } from 'react'
import MyButton from '../UI/Button/MyButton'
import MyInput from '../UI/Input/Input'
import MyLabel from '../UI/Label/MyLabel'
import '../../scss/components/registration.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { Context } from '../..';

const Registrationpage = () => {
    const {user}=useContext(Context )
    const navigate=useNavigate()
    return (
        <div>
            <>
                <div className="Registration">
                    <div className="Registration__content">
                        <div className="hollow1">

                        </div>
                        <div className="Registartion__content__leftside">
                            <MyLabel></MyLabel>
                            <MyLabel>Адрес электронной почты:</MyLabel>
                            <MyLabel>Пароль:</MyLabel>
                            <MyLabel>Подтвердите пароль:</MyLabel>
                            <MyLabel>Название:</MyLabel>
                            <MyLabel>BIN / ИИН:</MyLabel>
                            <MyLabel>ФИО:</MyLabel>
                            <MyLabel>Номер телефона:</MyLabel>

                        </div>
                        <div className="Registrtaion__content__right">
                            <div className="Title">
                                <div className="Title__content">
                                    <div className="order">
                                        Заказчик
                                    </div>
                                    <div className="deliver">
                                        Поставщик
                                    </div>
                                </div>
                            </div>
                            <MyInput placeholder="dsadasdasr@gmail.com"></MyInput>
                            <MyInput placeholder="Пожалуйста установите пароль"></MyInput>
                            <MyInput placeholder="Пожалуйста подтвердите ваш пароль снова"></MyInput>
                            <MyInput placeholder="Должна быть юридически зарегистрирова.."></MyInput>
                            <MyInput placeholder="Укажите ваш BIN / ИИН"></MyInput>
                            <MyInput placeholder="Укажите ваше ФИО"></MyInput>
                            <MyInput placeholder="Введите ваш номер телефона"></MyInput>
                            <div className="negiotate">
                                <input type="radio" className='radio' />
                                <div className="negiotate__text">
                                    При создании учетной записи на веб-сайте: Я согласен соблюдать
                                    <span style={{ color: "#00BCD4" }}>Соглашение о членстве в Alibaba.com</span>
                                </div>
                            </div>
                            <div className="Btn" onClick={()=>navigate('/proifle')}>
                                <MyButton onClick={()=>user.setIsAuth(true)} style={{ width: '347px', innerHeight: '50px', fontSize: '24px', marginTop: '35px',marginRight:'50px' }}>Зарегистрироваться</MyButton>
                            </div>
                            <div className="Text">
                                Уже есть аккаунт?
                                <span style={{ color: '#33C9DD' }}  ><NavLink to='/login'> Войдите</NavLink></span>
                            </div>
                        </div>
                        <div className="hollow2">

                        </div>

                    </div>
                </div>
            </>

        </div>
    )
}

export default Registrationpage