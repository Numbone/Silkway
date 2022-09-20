import React from "react";
import '../../scss/components/card.scss';
import { AiFillStar } from 'react-icons/ai';
import { FiShoppingBag } from 'react-icons/fi';
import { useNavigate} from "react-router-dom";
const Card = (props) => {
    
    const navigate=useNavigate()
    return (
    <div className="card" >
       
        <div className="content">
            
            <div className="img">
                <div className="info" onClick={()=>navigate('/device'+'/'+props.id)}><a>Доп инфо</a></div>
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