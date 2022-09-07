import React from 'react'
import MyButton from '../UI/Button/MyButton'
import star from '../../assets/images/Frame.png';
import rec from '../../assets/images/Rectangle.png';
import '../../scss/components/storeCard.scss';
import { NavLink } from 'react-router-dom';
const StoreCard = () => {
    return (
        <div>
            <div className='Card Store'>
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
                                65 ₸ - 80 ₸
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
                        <div className='storeBottom'>
                            <div className='storeBottom Text'>
                                <div style={{ color: "#70BF73" }}>
                                    Продаж за неделю: 45 (5 сегодня)
                                </div>
                                <div>
                                    Количество товара на складе: 350
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                <NavLink to="/statistic" style={{ textDecoration:"none" }}><MyButton style={{fontSize: "14px"}} >Открыть статистику товара</MyButton></NavLink>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default StoreCard