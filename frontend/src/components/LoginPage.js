import React from 'react';

import './styles/App.css'

import Header from './Header';
import LoginForm from './LoginForm';


export default function App() {
    return (
        <table className="container">
            <tbody>
                <tr>
                    <td className="header block">
                        <Header/>
                    </td>
                </tr>
                <tr>
                    <td className="left-block block">
                        <LoginForm/>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

