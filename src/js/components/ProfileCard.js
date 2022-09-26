import React, { useContext } from 'react'
import '../../scss/components/profileCard.scss';
import ps from '../../assets/images/Avatar.png';
import { BsChevronRight } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { Context } from '../..';


const ProfileCard = () => {
    const { user } = useContext(Context)
    return (
        <>

            <div className='Container'>
                <div className="profileCard">
                    <div className="Title" style={{border:'1px solid black'}}>
                        <h2>s3n3e company</h2>
                    </div>
                    {user.role == "provider"
                        ?
                        <>
                            <div className="CardContent">
                                <div className="leftside">
                                    <img src={ps} alt="" />
                                    <div className="CardText">
                                        <NavLink style={{ textDecoration: 'none', color: "black" }} to="/profile">Товары</NavLink>
                                    </div>
                                </div>
                                <div className="rightside">
                                    <BsChevronRight></BsChevronRight>
                                </div>
                            </div>
                            <div className="CardContent">
                                <div className="leftside">
                                    <img src={ps} alt="" />
                                    <div className="CardText">
                                        <NavLink to="/store" style={{ textDecoration: 'none', color: "black" }}>Cклад</NavLink>
                                    </div>
                                </div>
                                <div className="rightside">
                                    <BsChevronRight></BsChevronRight>
                                </div>
                            </div>
                            <div className="CardContent">
                                <div className="leftside">
                                    <img src={ps} alt="" />
                                    <div className="CardText">
                                        <NavLink to="/deliver" style={{ textDecoration: 'none', color: "black" }}>Заказы</NavLink>
                                    </div>
                                </div>
                                <div className="rightside">
                                    <BsChevronRight></BsChevronRight>
                                </div>
                            </div>
                        </>
                        : user.role == "seller" ?
                            <div className="CardContent">
                                <div className="leftside">
                                    <img src={ps} alt="" />
                                    <div className="CardText">
                                        <NavLink to="/deliver" style={{ textDecoration: 'none', color: "black" }}>Заказы</NavLink>
                                    </div>
                                </div>
                                <div className="rightside">
                                    <BsChevronRight></BsChevronRight>
                                </div>
                            </div>
                        :<div>Need to authorize </div> }
                </div>
            </div>
        </>
    )
}

export default ProfileCard