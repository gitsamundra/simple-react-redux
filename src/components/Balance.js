import React from 'react'
import { useSelector } from 'react-redux'

const Balance = () => {
    const state = useSelector(state => state.banking);
    return (
        <div>
            <h3>&pound;{state.balance}</h3>
        </div>
    )
}

export default Balance
