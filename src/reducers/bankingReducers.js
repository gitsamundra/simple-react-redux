const initState = {
    balance: 0,
    isSavingAccount: false,
    isLoggedIn: false
}
export const bankingReducers = (state = initState, action) => {
    switch(action.type) {
        case 'DEPOSIT':
            return  {
                ...state,
                balance: state.balance + action.amount
            }
        case 'WITHDRAW':
            return {
                ...state,
                balance: state.balance - action.amount
            };
        case 'INTEREST':
            return {
                ...state,
                balance: state.balance * 1.03
            };
        case 'DELETE_ACCOUNT':
            return {
                ...state,
                balance: 0
            };
        case 'CHANGE_ACCOUNT':
            return {
                ...state,
                isSavingAccount: !action.isSavingAccount
            }
        case 'TOGGLE_LOGIN':
            return {
                ...state,
                isLoggedIn: !action.isLoggedIn
            }
        default: 
            return state;
    }
};

