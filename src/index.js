import React, { createContext } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './js/containers/App';
import DeviceStore from './js/store/DeviceStore';
import UserStore from './js/store/UserStore';



const root = createRoot(document.getElementById('root'));
export const Context = createContext(null)
root.render(
    <Context.Provider value={{
        user:new UserStore(),
        device:new DeviceStore()
    }}>
        <App />
    </Context.Provider>
)
