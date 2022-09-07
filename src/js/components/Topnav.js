import React from "react";
import { useState } from "react";
import '../../scss/components/topnav.scss';
import { MdKeyboardArrowRight } from 'react-icons/md';


const Topnav = () => {
    const [isActive, setIsActive] = useState(false);
    const [selected, setIsSelected] = useState("Категории");
    
    const [isActive2, setIsActive2] = useState(false);
    const [selected2, setIsSelected2] = useState("Помощь");

    const [isActive3, setIsActive3] = useState(false);
    const [selected3, setIsSelected3] = useState("Продать на SilkWay");

    const [isActive4, setIsActive4] = useState(false);
    const [selected4, setIsSelected4] = useState("Доставка до:");
    
    return (
      <div className="topnav-wrapper">
            <div className="topnav">
                <div className="dropdown">
                    <div
                        onClick={(e) => {
                        setIsActive(!isActive);
                        }}
                        className="dropdown-btn"
                        
                    > 
                        {selected}
                        <span
                        className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"}
                        />
                        <MdKeyboardArrowRight />
                    </div>
                    <div
                        className="dropdown-content"
                        style={{ display: isActive ? "block" : "none" }}
                    >
                        <div
                            onClick={(e) => {
                                setIsSelected(e.target.textContent);
                                setIsActive(!isActive);
                            }}
                            className="item__top"
                            >
                            One
                        </div>
                    <div
                    className="item"
                    onClick={(e) => {
                        setIsSelected(e.target.textContent);
                        setIsActive(!isActive);
                    }}
                    >
                    Two
                    </div>
                    <div
                    className="item__bottom"
                    onClick={(e) => {
                        setIsSelected(e.target.textContent);
                        setIsActive(!isActive);
                    }}
                    >
                    Three
                    </div>
                </div>
            </div>

            <div className="dropdown2">
            <div
                onClick={(e) => {
                setIsActive2(!isActive2);
                }}
                className="dropdown2-btn2"
                
            > 
                {selected2}
                <span
                className={isActive2 ? "fas fa-caret-up" : "fas fa-caret-down"}
                />
                <MdKeyboardArrowRight />
            </div>
            <div
                className="dropdown2-content2"
                style={{ display: isActive2 ? "block" : "none" }}
            >
                <div
                onClick={(e) => {
                    setIsSelected2(e.target.textContent);
                    setIsActive2(!isActive2);
                }}
                className="item2__top"
                >
                One
                </div>
                <div
                className="item2"
                onClick={(e) => {
                    setIsSelected2(e.target.textContent);
                    setIsActive2(!isActive2);
                }}
                >
                Two
                </div>
                <div
                className="item2__bottom"
                onClick={(e) => {
                    setIsSelected2(e.target.textContent);
                    setIsActive2(!isActive2);
                }}
                >
                Three
                </div>
            </div>
            </div>


            <div className="dropdown3">
            <div
                onClick={(e) => {
                setIsActive3(!isActive3);
                }}
                className="dropdown3-btn3"
                
            > 
                {selected3}
                <span
                className={isActive3 ? "fas fa-caret-up" : "fas fa-caret-down"}
                />
                <MdKeyboardArrowRight />
            </div>
            <div
                className="dropdown3-content3"
                style={{ display: isActive3 ? "block" : "none" }}
            >
                <div
                onClick={(e) => {
                    setIsSelected3(e.target.textContent);
                    setIsActive3(!isActive3);
                }}
                className="item3__top"
                >
                One
                </div>
                <div
                className="item3"
                onClick={(e) => {
                    setIsSelected2(e.target.textContent);
                    setIsActive2(!isActive2);
                }}
                >
                Two
                </div>
                <div
                className="item3__bottom"
                onClick={(e) => {
                    setIsSelected3(e.target.textContent);
                    setIsActive3(!isActive3);
                }}
                >
                Three
                </div>
            </div>
            </div>
            </div>

            <div className="topnav__right">
                <div className="topnav__button">
                    <button className="topnav__btn">Готово к отправке</button>
                </div>

                <div className="dropdown4">
                <div
                    onClick={(e) => {
                    setIsActive4(!isActive4);
                    }}
                    className="dropdown4-btn4"
                    
                > 
                    {selected4}
                    <span
                    className={isActive4 ? "fas fa-caret-up" : "fas fa-caret-down"}
                    />
                    <MdKeyboardArrowRight />
                </div>
                <div
                    className="dropdown4-content4"
                    style={{ display: isActive4 ? "block" : "none" }}
                >
                    <div
                    onClick={(e) => {
                        setIsSelected4(e.target.textContent);
                        setIsActive4(!isActive4);
                    }}
                    className="item4__top"
                    >
                    One
                    </div>
                    <div
                    className="item4"
                    onClick={(e) => {
                        setIsSelected4(e.target.textContent);
                        setIsActive4(!isActive4);
                    }}
                    >
                    Two
                    </div>
                    <div
                    className="item4__bottom"
                    onClick={(e) => {
                        setIsSelected4(e.target.textContent);
                        setIsActive4(!isActive4);
                    }}
                    >
                    Three
                    </div>
                </div>
                </div>
            </div>
      </div>

        
      
    );
  }

export default Topnav;