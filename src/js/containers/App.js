import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import '../../scss/app.scss'
import Footer from '../components/Footer';
import AppRouter from './AppRouter';
import { observer } from 'mobx-react-lite';
import Test from '../components/Test';



export const App = observer(() => {
    
    return (
        <div className='wrapper'>

            <BrowserRouter>
            <Test/>
                <Header />
               
                <div className="wrapper__content">
                    <AppRouter />
                </div>
                <Footer />
            </BrowserRouter>
        </div>

    );
})

