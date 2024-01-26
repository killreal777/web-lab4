import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';

import App from './components/App';
import LoginPage from './components/LoginPage';

import './index.css';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<LoginPage/>} />
                    <Route path={"/main"} element={<App/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);