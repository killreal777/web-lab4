import React from 'react';

import './styles/App.css'

import Header from './Header';
import Area from './Area';
import Form from './Form';
import Table from './Table';


export default function App() {
    return (
        <table className="container">
            <tbody>
                <tr>
                    <td className="header block" colSpan="2">
                        <Header/>
                    </td>
                </tr>
                <tr>
                    <td className="left-block block">
                        <Area/>
                    </td>
                    <td className="right-block block">
                        <Form/>
                    </td>
                </tr>
                <tr>
                    <td className="results-block block" colSpan="2">
                        <Table/>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

