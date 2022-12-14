import React, { createContext } from 'react';
import { createRoot } from 'react-dom/client';
import { REACT_APP_API_URL } from './const';
import { App } from './js/containers/App';
import BasketStore from './js/store/BasketStore';
import DeviceStore from './js/store/DeviceStore';
import UserStore from './js/store/UserStore';



const root = createRoot(document.getElementById('root'));
export const Context = createContext(null)
root.render(
    <Context.Provider value={{
        user:new UserStore(),
        device:new DeviceStore(),
        basket:new BasketStore()
    }}>
        <App />
    </Context.Provider>
)
