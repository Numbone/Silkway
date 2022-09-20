import axios from 'axios';
import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { Context } from '../..';
import '../../scss/components/login.scss';
import { login } from '../https/userAPI';
import MyButton from '../UI/Button/MyButton';
import MyInput from '../UI/Input/Input';

const LoginPage =observer(() => {
  const {user}=useContext(Context)
  const navigate= useNavigate()
  const [username,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const signIn = async() =>{
      // let data
      // data = await login(username,password)
      // user.setUser(data.users.username)
      user.setIsAuth(true)
      user.setUser(user)
      // user.setRole(data.users.role)
      navigate("/profile")
     
}

  return (
    <div className="Auth">
      
      <div className="Auth__content">
        <div className="address">
          <div className="labelForInput">
            <div className="label">
              Адрес электронной почты:
            </div>
          </div>
          <MyInput value={username} onChange={e=>setEmail(e.target.value)} placeholder="dsadasdasr@gmail.com"></MyInput>

        </div>
        <div className="password">
          <div className="labelForInput">
            <div className="label">
              Пароль:
            </div>
          </div>
          <MyInput type='password' value={password} onChange={e=>setPassword(e.target.value)} placeholder="Введите пароль"></MyInput>

        </div>
        <div  className="Btn">
           <MyButton  onClick={signIn} >Войти</MyButton> 
        </div>
        <div className="Text">
          Нету аккаунта?   <NavLink to="/registration">  Зарегистрируйтесь</NavLink>
        </div>
      </div>
      
    </div>
  )
}
) 
export default LoginPage;