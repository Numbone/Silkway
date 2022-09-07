import React from "react";
import '../../scss/components/footer.scss';
import { FaFacebookF } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { BsGoogle } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import Logo from '../../assets/images/Logo2.svg';


const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <div className="footer__logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <ul>
                        <li><a href="!#">Silkway</a></li>
                        <li><a className="vacancy" href="!#">Вакансии</a></li>
                        <li><a href="!#">Copyright © 2022 All rights reserved.</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Адрес</h4>
                    <ul>
                        <li><a href="!#">Мангилик Ел, 55, блок С4.2, офис 265 Нур-Султан, Казахстан</a></li>
                        <li><a className="phone__number" href="!#">+77001780018</a></li>
                        <li><a href="!#">shoesinfo@SilkWay.kz</a></li>

                    </ul>
                </div>
                <div className="footer-col-last">
                    <h4>Социальные сети</h4>
                    <div className="social-links">
                        <a href="!#"><i><FaFacebookF /></i></a>
                        <a href="!#"><i><FaTelegramPlane /></i></a>
                        <a href="!#"><i><BsGoogle /></i></a>
                        <a href="!#"><i><BsInstagram /></i></a>
                    </div>
                <li><a href="!#">Статус лицензии и ее действительность могут быть проверены на сайте AFSA</a></li>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;