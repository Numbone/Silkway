import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Context } from '../..';

// import AuthContext from '../context/AuthContext';
import '../../scss/components/login.scss';
import MyButton from '../UI/Button/MyButton';
import MyInput from '../UI/Input/Input';

const LoginPage = () => {
  const {user}=useContext(Context)
  const navigate= useNavigate()
  console.log(navigate)

  return (
    <div className="Auth">
      
      <div className="Auth__content">
        <div className="address">
          <div className="labelForInput">
            <div className="label">
              Адрес электронной почты:
            </div>
          </div>
          <MyInput placeholder="dsadasdasr@gmail.com"></MyInput>

        </div>
        <div className="password">
          <div className="labelForInput">
            <div className="label">
              Пароль:
            </div>
          </div>
          <MyInput placeholder="Введите пароль"></MyInput>

        </div>
        <div onClick={()=>user.setIsAuth(true)} className="Btn">
           <MyButton  onClick={()=>navigate('/profile')} >Войти</MyButton> 
        </div>
        <div className="Text">
          Нету аккаунта?   <NavLink to="/registration">  Зарегистрируйтесь</NavLink>
        </div>
      </div>
      
    </div>
  )
}

export default LoginPage;