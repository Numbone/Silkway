import React, { useContext } from "react";
import { useNavigate} from "react-router-dom";
import { Context } from "../..";
import '../../scss/app.scss'
import Card from '../components/Card';
import Sidebar from '../components/Sidebar';
import Slider from '../components/Slider';
import Topnav from '../components/Topnav';

const HomePage = () => {
    const navigate =useNavigate()
    console.log(navigate)
    const { device } = useContext(Context)
    return (
        <div className="home-wrapper">
            <Topnav></Topnav>


            <div className="menu">
                <Sidebar />
                <Slider />
            </div>

            <div className="products">Товары с высоким спросом</div>

            <div className="cards" >
                {device._devices.map((item) =>
                    <Card 
                        img={item.img}
                        title={item.title}
                        price={item.price}
                        rate={item.rate}
                        id={item.id}
                    />
                )}
            </div>
            <div className="products">Товары для вас</div>

            <div className="cards">
                {device._devices.map((item) =>
                    <Card
                        img={item.img}
                        title={item.title}
                        price={item.price}
                        rate={item.rate}
                        id={item.id}
                    />
                )}
            </div>
        </div>
    );
}

export default HomePage;