import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Context } from "../..";
import '../../scss/app.scss'
import Card from '../components/Card';
import Sidebar from '../components/Sidebar';
import Slider from '../components/Slider';
import Topnav from '../components/Topnav';
import { fetchDevice, fetchType } from "../https/deviceAPI";

const HomePage = observer(() => {
   
    const { device } = useContext(Context)
   
    const result = async()=>{
        let data
        data= await fetchDevice().then(data=>data)
        console.log(data)
        return data
        
    }
    useEffect(()=>{
    // fetchType().then(data=>device.setTypes(data))
        result().then(data=>device.setDevices(data.data))
        
    },[])

  
    return (
        <div className="home-wrapper">
            <Topnav></Topnav>
<div className="menu">
                <Sidebar />
                <Slider />
            </div>

            <div className="products">Товары с высоким спросом</div>

            <div className="cards" >
                {device.devices===null
                ? <div>Emplty</div>
                 : device.devices.map((item) =>
                    
                    <Card 
                    img={item.image_path}
                    title={item.name}
                    price={item.price}
                    rate={item.rate}
                    key={item.id}
                    status={item.status}
                    description={item.description}
                    id={item.id}
                    />
                )}
            </div>
            <div className="products" >Товары для вас</div>

            <div className="cards" >
            {device.devices===null
                ? <div>Emplty</div>
                 : device.devices.map((item) =>
                    
                    <Card 
                    img={item.image_path}
                    title={item.name}
                    price={item.price}
                    rate={item.rate}
                    key={item.id}
                    status={item.status}
                    description={item.description}
                    id={item.id}
                    />
                )}
            </div>
        </div>
    );
})

export default HomePage;