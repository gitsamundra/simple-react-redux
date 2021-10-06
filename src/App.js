import React from 'react'
import './App.css';
import AccountType from './components/AccountType';
import Auth from './components/Auth';
import Balance from './components/Balance';
import Banking from './components/Banking';

const App = () => {
    return (
        <div className='container'>
            <Auth />
            <Balance />
            <Banking />
            <AccountType />
        </div>
    )
}

export default App
