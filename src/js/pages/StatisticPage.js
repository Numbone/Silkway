import React from 'react'
import '../../scss/components/statistic.scss';
import down from '../../assets/images/forwardDown.png';
import BarChar from '../components/BarChar';
import star from '../../assets/images/Frame.png';
import rec from '../../assets/images/Rectangle.png';
import MyButton from '../UI/Button/MyButton';
const StatisticPage = () => {
    return (
        <div style={{marginLeft:'50px'}}>
            <div className="StatisticContainer">
                <div className="sTopText">
                    Статистика склада
                </div>
                <div className="sSellContent">
                    <div className="sTopTextSell" style={{ marginLeft: '0px' }}>
                        <div className="sTopTextLeft">
                            Продажи
                        </div>
                        <div className="sTopTextRight">
                            <div>
                                за эту неделю
                            </div>
                            <div><img src={down}></img>
                            </div>
                        </div>
                    </div>
                    <div className="sSellBlockContent">
                        <div className="sSellBlock">
                            <div className="sSellBlockText">
                                Продажи <span style={{ color: '#FF3838' }}> -203.47 ₸</span>
                            </div>
                            <div className="sSellBlockPrice">
                                2 652.34 ₸
                            </div>
                        </div>
                        <div className="sSellBlock">
                            <div className="sSellBlockText">
                                Чистая прибыль <span style={{ color: '#FF3838' }}>-150.23 ₸</span>
                            </div>
                            <div className="sSellBlockPrice">
                                2 300.34 ₸
                            </div>
                        </div>
                        <div className="sSellBlock">
                            <div className="sSellBlockText">
                                Проданных товаров <span style={{ color: '#70BF73' }}> +1 200 шт.</span>
                            </div>
                            <div className="sSellBlockPrice">
                                15 000 шт.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Graphic">
                    <div className="GraphicTop">
                        <div className="GraphicTopLeft">
                            График продаж
                        </div>
                        <div className="GraphicTopRight">
                            <div>
                                за этот год
                            </div>
                            <div><img src={down}></img>
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop:'30px',marginBottom:'30px'}}>
                        <BarChar />
                    </div>
                </div>
                <div className="sBottom">
                    <div className="GraphicTop">
                        <div className="GraphicTopLeft">
                            График продаж
                        </div>
                        <div className="GraphicTopRight">
                            <div>
                                за этот год
                            </div>
                            <div><img src={down}></img>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginLeft: '200px', marginTop: '15px' }}>
                        <div className='StoreCard'>
                            <div className='storeImage'>
                                <img src={rec}></img>
                            </div>
                            <div className='StoreCardTextContent'>
                                <div className='TextContentTop'>
                                    Sell Well is suitable for 2018 BMW 5 Series G30 G38 car high quality universal rear bumper diffuser
                                </div>
                                <div className='TextContentPrice' style={{marginTop:'0'}}>
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
                                <div className='storeBottom' style={{marginTop:'0'}}>
                                    <div className="AreaBlock">
                                        <div className="graphicBottomBlock">
                                            <div className='graphicBottomBlockText'>
                                                Количество товара
                                            </div>
                                            <div className='graphicBottomBlockPrice'>
                                                1500 шт.

                                            </div>
                                        </div>
                                        <div className="graphicBottomBlock">
                                            <div className="graphicTextLeft">
                                                <div className='graphicBottomBlockText'>
                                                    Продаж
                                                </div>
                                                <div className="AroundText">
                                                    <div>
                                                        за неделю
                                                    </div>
                                                    <img src={down}></img>
                                                </div>
                                            </div>
                                            <div className='graphicBottomBlockPrice' style={{ color: '#4CAF50' }}>
                                                264253 ₸

                                            </div>
                                        </div>
                                        <div className="graphicBottomBlock">
                                            <>
                                                <div className="graphicTextLeft">
                                                    <div className='graphicBottomBlockText'>
                                                        Продаж товара
                                                    </div>
                                                    <div className="AroundText">
                                                        <div>
                                                            за неделю
                                                        </div>
                                                        <img src={down}></img>
                                                    </div>
                                                </div>
                                                <div className='graphicBottomBlockPrice' style={{ color: '#4CAF50' }}>
                                                    1500 шт.

                                                </div>
                                            </>

                                        </div>

                                    </div>

                                </div>
                                <div style={{display:'flex',marginRight:'500px',marginBottom:'50px'}}>
                                    <MyButton style={{
                                        height:'30px',fontSize:'14px',width:'300px'
                                    }
                                    }>Открыть статистику товара</MyButton>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div style={{ marginLeft: '200px', marginTop: '15px' }}>
                        <div className='StoreCard'>
                            <div className='storeImage'>
                                <img src={rec}></img>
                            </div>
                            <div className='StoreCardTextContent'>
                                <div className='TextContentTop'>
                                    Sell Well is suitable for 2018 BMW 5 Series G30 G38 car high quality universal rear bumper diffuser
                                </div>
                                <div className='TextContentPrice' style={{marginTop:'0'}}>
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
                                <div className='storeBottom' style={{marginTop:'0'}}>
                                    <div className="AreaBlock">
                                        <div className="graphicBottomBlock">
                                            <div className='graphicBottomBlockText'>
                                                Количество товара
                                            </div>
                                            <div className='graphicBottomBlockPrice'>
                                                1500 шт.

                                            </div>
                                        </div>
                                        <div className="graphicBottomBlock">
                                            <div className="graphicTextLeft">
                                                <div className='graphicBottomBlockText'>
                                                    Продаж
                                                </div>
                                                <div className="AroundText">
                                                    <div>
                                                        за неделю
                                                    </div>
                                                    <img src={down}></img>
                                                </div>
                                            </div>
                                            <div className='graphicBottomBlockPrice' style={{ color: '#4CAF50' }}>
                                                264253 ₸

                                            </div>
                                        </div>
                                        <div className="graphicBottomBlock">
                                            <>
                                                <div className="graphicTextLeft">
                                                    <div className='graphicBottomBlockText'>
                                                        Продаж товара
                                                    </div>
                                                    <div className="AroundText">
                                                        <div>
                                                            за неделю
                                                        </div>
                                                        <img src={down}></img>
                                                    </div>
                                                </div>
                                                <div className='graphicBottomBlockPrice' style={{ color: '#4CAF50' }}>
                                                    1500 шт.

                                                </div>
                                            </>

                                        </div>

                                    </div>

                                </div>
                                <div style={{display:'flex',marginRight:'500px',marginBottom:'50px'}}>
                                    <MyButton style={{
                                        height:'30px',fontSize:'14px',width:'300px'
                                    }
                                    }>Открыть статистику товара</MyButton>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatisticPage