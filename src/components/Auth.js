import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loggedIn } from '../actions/bankingActions';

const Auth = () => {
    const state = useSelector(state => state.banking);
    const dispatch = useDispatch();

    const handleLoggedIn = () => {
        dispatch(loggedIn())
    }

    return (
        <div>
            <button className="btn btn-success" onClick={handleLoggedIn}>{state.isLoggedIn ? 'Login' : 'Logout'}</button>
        </div>
    )
}

export default Auth
