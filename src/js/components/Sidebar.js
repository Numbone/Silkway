import React, { useContext } from "react";
import '../../scss/components/sidebar.scss';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BiRightArrowAlt } from 'react-icons/bi';
// import images from '../../assets/images/circle.png';
import icon from '../../assets/images/Avatar.png';
import { Context } from "../..";


const Sidebar = () => {
    const { device } = useContext(Context)
    return (
        <div className="sidebar-wrapper">
            <div className="sidebar">
                <p className="sidebar__title">Частые товары</p>

                <div className="options">

                    {device.types.map((type) => 
                        <div key={type.id} className="options__var">
                            <a href="!#">
                                <img src={icon} alt="" />
                                {type.name}
                                <MdKeyboardArrowRight className="options__arrow" />
                            </a>
                        </div>
                    )
                    }

                </div>
                <div className="sale__card">
                    <h2>Sale Card</h2>
                    <p className="sale__text">Дает -20% на любой товар плошадки SilkWay</p>
                    <a href="!#" className="sale__arrow">
                        Read more
                        <BiRightArrowAlt className="sale__icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;