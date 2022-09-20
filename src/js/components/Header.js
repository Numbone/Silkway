import React from "react";
import { Link, NavLink } from 'react-router-dom';
import '../../scss/components/header.scss';
import { BsBagCheck } from 'react-icons/bs';
import { FiShoppingBag } from 'react-icons/fi';
import { RiLoginBoxLine } from 'react-icons/ri';
import { IoIosArrowDown } from 'react-icons/io';
import Logo from '../../assets/images/logo.svg';
import { useContext } from "react";
import { Context } from "../..";
import { observer } from "mobx-react-lite";


const Header = observer(() => {
    const { user } = useContext(Context)
    console.log(user)
    return (
        <div className="header-wrapper">
            <div className='headernav'>
                <div className="header__logo">
                    <NavLink to="/"><img src={Logo} alt="logo" /></NavLink>
                </div>

                <div className="header__searchbar">
                    <div className="header__products">
                        <div className="dropdown">
                            <button className="dropbtn">Продукты
                                <IoIosArrowDown className="icon__arrow" />
                            </button>
                            <div className="dropdown-content">
                                <a href="!#">Link 1</a>
                                <a href="!#">Link 2</a>
                                <a href="!#">Link 3</a>
                            </div>
                        </div>
                    </div>
                    <div className="header__search">
                        <input className="nosubmit" type="search" placeholder="Что вы ищите" />
                    </div>
                </div>

                <div className="header__menu">
                    <a href="!#"><BsBagCheck className="icon" />
                        Заказы
                    </a>
                    <NavLink to="/basket"><FiShoppingBag className="icon" />
                        Корзина
                    </NavLink>

                    {user.isAuth ?
                        <div>
                            <NavLink to="/profile"> NameSeller</NavLink>
                        </div>
                        :
                        <div  style={{width:'300px',display:'flex'}}>
                            <NavLink to="/login" className="last__link"><RiLoginBoxLine className="icon" />Вход <span>/</span></NavLink>
                            <NavLink to="/registration" >Регистрация</NavLink>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
})

export default Header;