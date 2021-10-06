import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteAccount, deposit, interest, switchAccount, withdraw } from '../actions/bankingActions';

const Banking = () => {
    const [ amount, setAmount] = useState('');
    const dispatch = useDispatch();
    const handleDeposit = () => {
        dispatch(deposit(amount))
    };
    
    const handleWithdraw = () => {
        dispatch(withdraw(amount))
    };

    const handleInterest = () => {
        dispatch(interest())
    };

    const handleDeleteAccount = () => {
        dispatch(deleteAccount())
    };

    const handleChangeAccount = () => {
        dispatch(switchAccount());
    };
    return (
        <div className='form-group'>
            <input onChange={(e) => setAmount(e.target.value)} type="text" className="form-control mb-4" />
            <div style={{width: '100%', display:'flex', justifyContent: 'space-between'}}>
                <button className="btn btn-success" onClick={handleDeposit}>Deposit</button>
                <button className="btn btn-primary" onClick={handleWithdraw}>Withdraw</button>
                <button className="btn btn-warning" onClick={handleInterest}>Interest</button>
                <button className="btn btn-danger" onClick={handleDeleteAccount}>Delete Account</button>
                <button className="btn btn-secondary ml-4" onClick={handleChangeAccount}>Change Account</button>
            </div>
        </div>
    )
}

export default Banking;
