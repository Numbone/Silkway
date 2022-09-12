import React, { useContext, useState } from 'react'
import MyButton from '../UI/Button/MyButton'
import MyInput from '../UI/Input/Input'
import MyLabel from '../UI/Label/MyLabel'
import '../../scss/components/registration.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { Context } from '../..';
import { registration } from '../https/userAPI';

const Registrationpage = () => {
    const {user}=useContext(Context )
    const navigate=useNavigate()
    const signIn = async(email,password,role,verifyPassword,company,IIN,FIO,phone) =>{
        try {
            let data
            data = await registration(email,password,role,verifyPassword,company,IIN,FIO,phone)
            user.setUser(user)
            user.setIsAuth(true)
            navigate('/login')
        } catch (e) {
            alert('error')
        }
        
      }
  
    
    const [role,setRole]=useState('customer')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [verifyPassword,setVerifyPassword]=useState('')
    const [company,setCompany]=useState('')
    const [IIN,setIIN]=useState('')
    const [FIO,setName]=useState('')
    const [phone,setPhone]=useState('')  
    function setRoleCustomer(){
        setRole('customer')
    }
    function setRoleProvider(){
        setRole('provider')
    }
    console.log(role)
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
                                    <div className="order" onClick={setRoleCustomer} style={role ==='customer' ? {  backgroundColor:'#33C9DD'} : {backgroundColor:'white',color:'black' , border: '1px solid  #494A53'}}>
                                        Заказчик
                                    </div>
                                    <div className="deliver" onClick={setRoleProvider} style={role ==='provider' ? {  backgroundColor:'#33C9DD',border:'none',borderRadius:'0 5px 5px 0',color:'white'} : {backgroundColor:'white',color:'black' , border: '1px solid  #494A53'}}>
                                        Поставщик
                                    </div>
                                </div>
                            </div>
                            <MyInput value={email} onChange={e=>setEmail(e.target.value)} placeholder="dsadasdasr@gmail.com"></MyInput>
                            <MyInput type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Пожалуйста установите пароль"></MyInput>
                            <MyInput type="password" value={verifyPassword} onChange={e=>setVerifyPassword(e.target.value)} placeholder="Пожалуйста подтвердите ваш пароль снова"></MyInput>
                            <MyInput value={company} onChange={e=>setCompany(e.target.value)} placeholder="Должна быть юридически зарегистрирова.."></MyInput>
                            <MyInput value={IIN} onChange={e=>setIIN(e.target.value)} placeholder="Укажите ваш BIN / ИИН"></MyInput>
                            <MyInput value={FIO} onChange={e=>setName(e.target.value)} placeholder="Укажите ваше ФИО"></MyInput>
                            <MyInput value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Введите ваш номер телефона"></MyInput>
                            <div className="negiotate">
                                <input type="radio" className='radio' />
                                <div className="negiotate__text">
                                    При создании учетной записи на веб-сайте: Я согласен соблюдать
                                    <span style={{ color: "#00BCD4" }}>Соглашение о членстве в Alibaba.com</span>
                                </div>
                            </div>
                            <div className="Btn" onClick={()=>navigate('/profile')}>
                                <MyButton onClick={signIn} style={{ width: '347px', innerHeight: '50px', fontSize: '24px', marginTop: '35px',marginRight:'50px' }}>Зарегистрироваться</MyButton>
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