import React, { Component }  from 'react';
import Basket from "../pages/Basket"
import BasketOrder from "../pages/BasketOrder"
import DeliverPage from "../pages/DeliverPage"
import DevicePage from "../pages/DevicePage"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import OpenOrder from "../pages/OpenOrder"
import ProfilePage from "../pages/ProfilePage"
import Registrationpage from "../pages/Registrationpage"
import StatisticPage from "../pages/StatisticPage"
import StorePage from "../pages/StorePage"
import UploadPage from "../pages/UploadPage"

export const authRoutes=[
    {
        path:'/basket',
        element:<Basket/>
    },
    {
        path:'/profile',
        element:<ProfilePage/>
    },
    {
        path:'/uploadItem',
        element:<UploadPage/>
    },
    {
        path:'/store',
        element:<StorePage/>
    },
    {
        path:'/deliver',
        element:<DeliverPage/>
    },
    {
        path:'/statistic',
        element:<StatisticPage/>
    },
    {
        path:'/order/:id',
        element:<OpenOrder/>
    },
    {
        path:'/basket2',
        element:<BasketOrder/>
    }

]
export const providerRoutes=[
    {
        path:'/profile',
        element:<ProfilePage/>
    },
    {
        path:'/uploadItem',
        element:<UploadPage/>
    },
    {
        path:'/statistic',
        element:<StatisticPage/>
    },
    {
        path:'/order/:id',
        element:<OpenOrder/>
    },
    {
        path:'/store',
        element:<StorePage/>
    },
]
const sellerRoutes=[
    
]
export const publicRoutes=[
    {
        path:'/',
        element:<HomePage/>
    },
    {
        path:'/login',
        element:<LoginPage/>
    },
    {
        path:'/registration',
        element:<Registrationpage/>
    },
    {
        path:'/device/:id',
        element:<DevicePage/>
    },
]
