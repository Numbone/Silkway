import React from "react";
import '../../scss/components/sidenav.scss';

const Sidenav = () => {
    return (
        <div className="nav">
        <ul>
            <li className="dropdown">

                <h2>Частые товары</h2>
                
                <a href="!#">
                    <img src="/sidenav/Avatar.png" alt="Avatar" />
                    Option 1
                </a>
                <ul>
                    <li><a href="!#">Product</a></li>
                    <li><a href="!#">Product</a></li>
                    <li><a href="!#">Product</a></li>
                    <li><a href="!#">Product</a></li>
                </ul>
            </li>
            <li class="dropdown">
                <a href="!#">
                    <img src="/sidenav/Avatar.png" alt="Avatar" />
                    Option 2
                </a>
                <ul>
                    <li><a href="!#">Product</a></li>
                    <li><a href="!#">Product</a></li>
                    <li><a href="!#">Product</a></li>
                    <li><a href="!#">Product</a></li>
                </ul>
            </li>
            <li class="dropdown">
                <a href="!#">
                    <img src="/sidenav/Avatar.png" alt="Avatar" />
                    Option 3
                </a>
                <ul>
                    <li><a href="!#">Product</a></li>
                    <li><a href="!#">Product</a></li>
                    <li><a href="!#">Product</a></li>
                    <li><a href="!#">Product</a></li>
                </ul>
            </li>
            <li class="dropdown">
                <a href="!#">
                    <img src="/sidenav/Avatar.png" alt="Avatar" />
                    Option 4
                </a>
                <ul>
                    <li><a href="!#">Product</a></li>
                    <li><a href="!#">Product</a></li>
                    <li><a href="!#">Product</a></li>
                    <li><a href="!#">Product</a></li>
                </ul>
            </li>
            <li class="dropdown">
                <a href="!#">
                    <img src="/sidenav/Avatar.png" alt="Avatar" />
                    Option 5
                </a>
                <ul>
                    <li><a href="!#">Product</a></li>
                    <li><a href="!#">Product</a></li>
                    <li><a href="!#">Product</a></li>
                    <li><a href="!#">Product</a></li>
                </ul>
            </li>
            <li class="dropdown">
                <a href="!#"><img src="/sidenav/Avatar.png" alt="Avatar" />
                    Option 6
                </a>
                <ul>
                    <li><a href="!#">Product</a></li>
                    <li><a href="!#">Product</a></li>
                    <li><a href="!#">Product</a></li>
                    <li><a href="!#">Product</a></li>
                </ul>
            </li>
            <li class="dropdown">
                <a href="!#"><img src="/sidenav/Avatar.png" alt="Avatar" />
                    Option 7
                </a>
                <ul>
                    <li><a href="!#">Product</a></li>
                    <li><a href="!#">Product</a></li>
                    <li><a href="!#">Product</a></li>
                    <li><a href="!#">Product</a></li>
                </ul>
            </li>
        </ul>

        <div class="card">
            <p class="card__title">Sale Card</p>
            <p class="card__text">Дает -20% на любой товар плошадки SilkWay</p>
            <a href="!#">Read more</a>
        </div>
    </div>
    );
}

export default Sidenav;
