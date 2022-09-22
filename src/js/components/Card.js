import '../../scss/components/card.scss';
import { AiFillStar } from 'react-icons/ai';
import { BsFillCartDashFill } from 'react-icons/bs';
import { useLocation, useNavigate} from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { $authHost } from "../https";
import { observer } from "mobx-react-lite";
const Card =observer((props) => {
    console.log(props,"props")
    const location=useLocation()
    const navigate=useNavigate()
    const deleteItem =async()=>{
        const data =await $authHost.delete(`api/provider/products/${props.id}`)
        return data
    }
    return (
    <div className="card" >
       
        <div className="content">
            
            <div className="img">
                <div className="info" onClick={()=>navigate('/device'+'/'+props.id)}><span>Доп инфо</span></div>
                {
                    location.pathname!='/profile' 
                    ? <div className="bag"><BsFillCartDashFill/></div>
                    : <div className="bag" onClick={deleteItem}><AiOutlineClose/></div>
                }
                
            <img style={{width:'200px',height:"200px",objectFit:'contain '}} src={props.img} alt="" />
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
            <div className="cart">
                <p>{props.description}</p>
            </div>
        </div>
    </div>
    )
}
)
export default Card;