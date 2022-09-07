import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import '../../scss/app.scss'
import Footer from '../components/Footer';
import AppRouter from './AppRouter';
import { observer } from 'mobx-react-lite';



export const App = () => {

    return (
        <div className='wrapper'>

            <BrowserRouter>
                <Header />
                <div className="wrapper__content">
                    <AppRouter />
                </div>
                <Footer />
            </BrowserRouter>
        </div>

    );
}

