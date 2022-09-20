import React from 'react'
import BasketCard from '../components/BasketCard';
import '../../scss/components/basketCard.scss';
import del from '../../assets/images/delete.png';
import MyButton from '../UI/Button/MyButton';
import { NavLink, useNavigate } from 'react-router-dom';

import exclaim from '../../assets/images/exami.png';
import gazel from '../../assets/images/gazel.png';

const BasketOrder = () => {
    const navigate=useNavigate()
    const navi=()=>{
        navigate('/profile')
    }
    return (
        <div style={{ display: "flex" }}>
            <div className="leftSideBasket">
                <div className="adressDeliver">
                Добавьте адрес доставки


                </div>
                <div className="topBasketCard">
                    <div className="topBasketCardText">
                        TOO - Билион Амстердамовсие
                    </div>
                    <div className="topBasketCardImg">
                        <img src={del} alt="tab" />
                    </div>
                </div>
                <div className='Line' >

                </div>
                <BasketCard />
                <BasketCard />
                <div style={{marginLeft:'120px'}}>
                    <div className='Logistic'>
                        <div className='LogisticTop'>
                            <div className='LogisticText'>
                                <div>
                                    <img src={exclaim}></img>
                                </div>
                                <div style={{ marginLeft: "5px" }}>
                                    Информация о логистике должна быть подтверждена
                                </div>
                            </div>
                            <div className='LogisticTextBlue'>
                                Чат с заказчиком
                            </div>
                        </div>
                        <div className='LineOrder'>
                        </div>
                        <div className='ContentCardOpenOrder'>
                            <div className='ColumnCardOpenOrder'>
                                <div className='KeyOrder'>
                                    Методы доставки
                                </div>
                                <div className='ValueOrder'>
                                    <img src={gazel}></img>
                                    <div style={{ marginLeft: '10px' }}>Газель</div>

                                </div>
                            </div>
                            <div className='ColumnCardOpenOrder'>
                                <div className='KeyOrder'>
                                    Время доставки
                                </div>
                                <div className='ValueOrder'>
                                    <div className="ValueOrderContent">
                                        <div>
                                            Оплата
                                        </div>
                                        <div>
                                            Отправка
                                        </div>
                                        <div>
                                            Прием
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='CircleLineContent'>
                                <div className="circle">

                                </div>
                                <div className="circleLine">

                                </div>
                                <div className="circle">

                                </div>
                                <div className="circleLine">

                                </div>
                                <div className="circle">

                                </div>
                            </div>
                            <div className=" ContentBottomLine">
                                <div>
                                    Оплата после получения
                                </div>
                                <div style={{ marginLeft: "89px" }} >
                                    В течение 5 р.д.
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='Logistic'>
                        <div className='LogisticTop'>
                            <div className='LogisticText'>
                                <div>
                                    <img src={exclaim}></img>
                                </div>
                                <div style={{ marginLeft: "5px" }}>
                                    Выбор оплаты заказчика
                                </div>
                            </div>
                            <div className='LogisticTextBlue'>
                                Чат с заказчиком
                            </div>
                        </div>
                        <div className='LineOrder'>
                        </div>
                        <div className='ContentCardOpenOrder'>
                            <div className='ColumnCardOpenOrder'>
                                <div className='KeyOrder'>
                                    Способы оплаты
                                </div>
                                <div className='ValueOrder'>
                                    <div className='CheckBoxOrder'>
                                        <div className='radioOrder' style={{ backgroundColor: ' #33C9DD', border: "none" }}>

                                        </div>
                                        <div className='OrderText'>
                                            Наличными (при получении товара)
                                        </div>

                                    </div>
                                    <div className='CheckBoxOrder' style={{ marginLeft: '20px' }}>
                                        <div className='radioOrder'>

                                        </div>
                                        <div className='OrderText'>
                                            Консигнация
                                        </div>

                                    </div>
                                    <div className='CheckBoxOrder'>
                                        <div className='radioOrder'>

                                        </div>
                                        <div className='OrderText'>
                                            Банковский перевод
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='AdditionalInformation'>
                        <div className='Addleft'>
                            Дополнительная информация от заказчика
                        </div>
                        <input className='Addright' placeholder='Мне бы хотелось принять доставку моего заказа немного быстрее.'>

                        </input>

                    </div>
                </div>



            </div>
            <div className="rightSideBasket">
                <div className="Korsina">
                    <div className="KorsinaText">
                        Корзина
                    </div>
                    <div className="KorsinaContent">
                        <div className="KorsinaContentKey">
                            Цена товаров:
                        </div>
                        <div className="KorsinaContentValue">
                            1 572 ₸
                        </div>
                    </div>
                    <div className="KorsinaContent">
                        <div className="KorsinaContentKey">
                        Цена доставки:
                        </div>
                        <div className="KorsinaContentValue">
                            100 ₸
                        </div>
                    </div>
                    <div className="LineKorsina">

                    </div>
                    <div className="KorsinaContent" >
                        <div className="KorsinaContentKey">
                            Итог:
                        </div>
                        <div className="KorsinaContentValue">
                            1 672 ₸
                        </div>
                    </div>
                    <div className="KorsinaContent" >
                        <div className="KorsinaContentValue">

                        </div>
                    </div>
                    <div>
                        <MyButton onClick={navi} style={{ width: '225px', fontSize: '16px', marginTop: '15px' }}><NavLink style={{ textDecoration: 'none', color: 'white' }} to="/basket2">Оплатить заказ</NavLink></MyButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketOrder