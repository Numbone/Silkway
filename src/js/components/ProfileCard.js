import React from 'react'
import '../../scss/components/profileCard.scss';
import ps from '../../assets/images/Avatar.png';
import { BsChevronRight } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';


const ProfileCard = () => {

    return (
        <>

            <div className='Container'>

                <div className="profileCard">
                    <div className="Title">
                        <h2>s3n3e company</h2>
                    </div>
                    <div className="CardContent">
                        <div className="leftside">
                            <img src={ps} alt="" />
                            <div className="CardText">
                                    <NavLink style={{textDecoration:'none',color:"black"}} to="/profile">Товары</NavLink>  
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
                               <NavLink to="/store"  style={{textDecoration:'none',color:"black"}}>Cклад</NavLink> 
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
                            <NavLink to="/deliver"  style={{textDecoration:'none',color:"black"}}>Заказы</NavLink>
                            </div>
                        </div>
                        <div className="rightside">
                            <BsChevronRight></BsChevronRight>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default ProfileCard