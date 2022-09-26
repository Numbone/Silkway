import React, { useContext, useState } from 'react'
import MyButton from '../UI/Button/MyButton'
import MyInput from '../UI/Input/Input'
import MyLabel from '../UI/Label/MyLabel'
import '../../scss/components/registration.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { Context } from '../..';
import { registration } from '../https/userAPI';
import axios from 'axios';

const Registrationpage = () => {
    const {user}=useContext(Context )
    const navigate=useNavigate()
    //  const customConfig = {
    //     headers: {
    //     'Content-Type': 'application/json'
    //     }
    // };
    // const all=JSON.stringify({address},{biiniin},{name},{organName},{password},{phone},{role},{username})
    
    // const  signIn= async (address ,biiniin,name,organName,password,phone,role,username)=>{
    //     const customConfig = {
    //         headers: {
    //         'Content-Type': 'application/json'
    //         }
    //     }
    //     const {data}=await axios.post('https://api.silkway.systems/sign-up',all,customConfig)
    //     return data
    // }
    
    
    // const address =JSON.stringify(address1)
    // const biiniin =JSON.stringify(biiniin1)
    // const name =JSON.stringify(name1)
    // const organName =JSON.stringify(organName1)
    // const password =JSON.stringify(password1)
    // const phone =JSON.stringify(phone1)
    // const role =JSON.stringify(role1)
    // const username =JSON.stringify(username1)

    const signIn = async() =>{
        
            let data
            
            data = await registration(address,biiniin,name,organName,password,phone,role,username)
            // user.setUser(user)
            // user.setIsAuth(true)
            // navigate('/login')
            console.log(data)
        
        
      }
  
    
    const [role,setRole]=useState('seller')
    const [address,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [organName,setVerifyPassword]=useState('')
    const [name,setCompany]=useState('')
    const [biiniin,setIIN]=useState('')
    const [username,setName]=useState('')
    const [phone,setPhone]=useState('') 
    
   
    function setRoleCustomer(){
        setRole('seller')
    }
    function setRoleProvider(){
        setRole('provider')
    }
    
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
                                    <div className="order" onClick={setRoleCustomer} style={role ==='seller' ? {  backgroundColor:'#33C9DD'} : {backgroundColor:'white',color:'black' , border: '1px solid  #494A53'}}>
                                        Заказчик
                                    </div>
                                    <div className="deliver" onClick={setRoleProvider} style={role ==='provider' ? {  backgroundColor:'#33C9DD',border:'none',borderRadius:'0 5px 5px 0',color:'white'} : {backgroundColor:'white',color:'black' , border: '1px solid  #494A53'}}>
                                        Поставщик
                                    </div>
                                </div>
                            </div>
                            <MyInput value={address} onChange={e=>setEmail(e.target.value)} placeholder="dsadasdasr@gmail.com"></MyInput>
                            <MyInput type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Пожалуйста установите пароль"></MyInput>
                            <MyInput type="password" value={organName} onChange={e=>setVerifyPassword(e.target.value)} placeholder="Пожалуйста подтвердите ваш пароль снова"></MyInput>
                            <MyInput value={name} onChange={e=>setCompany(e.target.value)} placeholder="Должна быть юридически зарегистрирова.."></MyInput>
                            <MyInput value={biiniin} onChange={e=>setIIN(e.target.value)} placeholder="Укажите ваш BIN / ИИН"></MyInput>
                            <MyInput value={username} onChange={e=>setName(e.target.value)} placeholder="Укажите ваше ФИО"></MyInput>
                            <MyInput value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Введите ваш номер телефона"></MyInput>
                            <div className="negiotate">
                                <input type="radio" className='radio' />
                                <div className="negiotate__text">
                                    При создании учетной записи на веб-сайте: Я согласен соблюдать
                                    <span style={{ color: "#00BCD4" }}>Соглашение о членстве в Alibaba.com</span>
                                </div>
                            </div>
                            <div className="Btn" onClick={()=>navigate('/login')}>
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