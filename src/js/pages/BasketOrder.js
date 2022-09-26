import React, { useContext, useEffect, useState } from 'react'
import BasketCard from '../components/BasketCard';
import '../../scss/components/basketCard.scss';
import del from '../../assets/images/delete.png';
import MyButton from '../UI/Button/MyButton';
import { NavLink, useNavigate } from 'react-router-dom';
import { providerOneTransaction } from '../https/basketAPI';
import deleteIcon from '../../assets/images/delete.png';
import star from '../../assets/images/Frame.png';
import rec from '../../assets/images/Rectangle.png';
import { Context } from '../..';
import { $authHost } from '../https';

const BasketOrder = () => {
    const { basket, user } = useContext(Context)
    const [result, setResult] = useState({})
    const OrderId = async () => {
        const data = await providerOneTransaction(basket.onetransaction.id)
        return data
    }
    useEffect(() => {
        OrderId().then(item => setResult(item))
    }, [])

    const SendOrder = async (id) => {
        const data = await $authHost.patch('api/' + user.role + '/transaction/confirm/' + id)
        return data
    }


    return (
        <div style={{ display: "flex" }}>
            <div className="leftSideBasket">

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
                {result.products_amount == null ?
                    <div>Empty</div>
                    : result.products_amount.map((item, index) =>

                        <div className='Card Store' style={{ marginLeft: '120px' }}>
                            <div className='StoreCard'>
                                <div className='storeImage'>
                                    <img src={rec}></img>
                                </div>
                                <div className='StoreCardTextContent'>
                                    <div className='TextContentTop'>
                                        Sell Well is suitable for 2018 BMW 5 Series G30 G38 car high quality universal rear bumper diffuser
                                    </div>
                                    <div className='TextContentPrice'>
                                        <div className='TextContentPriceText'>
                                            id:{result.products_id[index]}
                                        </div>
                                        <div className='TextContent Star'>
                                            <div className='StarImg'>
                                                <img src={star}></img>
                                            </div>
                                            <div className='StartText'>
                                                4.7
                                            </div>
                                        </div>
                                    </div>
                                    < div className='storeOpenOrder'>
                                        <div className='cardOpenOrderleft'>
                                            <div>
                                                Цвет:
                                            </div>
                                            <div className='OpenOrderColor'>

                                            </div>
                                        </div>
                                        <div className='cardOpenOrderright'>
                                            <div>
                                                90₸/шт
                                            </div>
                                            <div>
                                                Количество:  {item}
                                            </div>
                                            <div>

                                            </div>
                                            <div>
                                                <img src={deleteIcon}></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}




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
                        <MyButton onClick={() => { SendOrder(basket.onetransaction.id) }} style={{ width: '225px', fontSize: '16px', marginTop: '15px' }}>
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/basket2">
                                {(user.role == 'provider') ? <p>Одобрить заказ</p>
                                    : (user.role == "seller") ? <p>Оплатить заказ</p>
                                        : <p>Authorize</p>}
                            </NavLink>
                        </MyButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketOrder