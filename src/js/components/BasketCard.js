import React from 'react'
import '../../scss/components/basketCard.scss';
import del from '../../assets/images/delete.png';
import MyButton from '../UI/Button/MyButton';
import down from '../../assets/images/forwardDown.png';
import star from '../../assets/images/Frame.png';
import rec from '../../assets/images/Rectangle.png';

const BasketCard = () => {
    return (
        <div>
           
            <div className='StoreCard' style={{ marginLeft: '120px', width: '930px' }}>
                <div className='storeImage'>
                    <img src={rec}></img>
                </div>
                <div className='StoreCardTextContent'>
                    <div className='TextContentTop'>
                        Sell Well is suitable for 2018 BMW 5 Series G30 G38 car high quality universal rear bumper diffuser
                    </div>
                    <div className='TextContentPrice' style={{ marginTop: '0' }}>
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
                    <div className='BasketCardBottom' >
                        <div className="basketCardColor">
                            <div className="basketCardTextColl">
                                Цвет:
                            </div>
                            <div className="basketCardColorDi">

                            </div>
                        </div>
                        <div className="basketColorCountContent">
                            <div className="basketText">
                                23 ₸/шт
                            </div>
                            <div className="countBasket">
                                <div className="divCount">
                                    -
                                </div>
                                <div className="TotalCount">
                                    12
                                </div>
                                <div className="divCount">
                                    +
                                </div>
                            </div>
                            <div className="basketText">
                                Итог:1 572 ₸
                            </div>
                            <div className="topBasketCardImg">
                                <img src={del} alt="tab" />
                            </div>
                        </div>

                    </div>

                </div >
            </div >
        </div >
    )
}

export default BasketCard