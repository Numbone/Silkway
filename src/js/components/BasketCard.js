import React, { useContext, useState } from 'react'
import '../../scss/components/basketCard.scss';
import del from '../../assets/images/delete.png';
import star from '../../assets/images/Frame.png';
import rec from '../../assets/images/Rectangle.png';
import { Context } from '../..';
import {  sellerDelete } from '../https/basketAPI';
import { observer } from 'mobx-react-lite';

const BasketCard = observer((props) => {
 
    const deleteItem =async(id)=>{
        const data =await sellerDelete(id)
        console.log(data)
        return data
    }
  
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
                        {props.productCost / props.amount}  тг
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
                                {props.productCost / props.amount} ₸/шт
                            </div>
                            <div className="countBasket">
                                {/* <div className="divCount" onClick={Decrement}>
                                    -
                                </div> */}
                                <div className="TotalCount">
                                    {props.amount}
                                </div>
                                {/* <div className="divCount" onClick={Increment}>
                                    +
                                </div> */}
                            </div>
                            <div className="basketText">
                                Итог:{props.productCost}
                            </div>
                            <div  className="topBasketCardImg">
                                <button 
                                    style={{border:'none',width:'100%',backgroundColor:'white'}}  
                                    onClick={()=>deleteItem(props.id)}
                                    >
                                <img src={del} alt="tab" />
                                </button>
                            </div>
                        </div>

                    </div>

                </div >
            </div >
        </div >
    )
})

export default BasketCard