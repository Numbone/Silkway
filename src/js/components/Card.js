import React from "react";
import '../../scss/components/card.scss';
import { AiFillStar } from 'react-icons/ai';
import { FiShoppingBag } from 'react-icons/fi';

const Card = (props) => {
    return (
    <div className="card">
       
        <div className="content">
            
            <div className="img">
                <div className="info"><a href="!#">Доп инфо</a></div>
                <div className="bag"><FiShoppingBag /></div>
                <img src={props.img} alt="" />
            </div>
            <div className="title">
                {props.title}
            </div>
            <div className="review__container">
                <p className="price">{props.price}</p>
                <p className="price__rate">
                    <AiFillStar className="icon" />
                    {props.rate}</p>
            </div>
            
            <div className="cart">
                <p>1 Штука (Минимальный. Заказ)</p>
            </div>
        </div>
    </div>
    )
}

export default Card;