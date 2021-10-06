import React from 'react'
import { useSelector } from 'react-redux'

const AccountType = () => {
    const state = useSelector(state => state.banking);
    return (
        <div>
           <h1>{state.isSavingAccount ? "Saving Account" : "Current Account"}</h1> 
        </div>
    )
}

export default AccountType
