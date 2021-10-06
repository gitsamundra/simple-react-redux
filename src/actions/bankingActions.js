export const deposit = (amount) => {
    return {type: 'DEPOSIT', amount: parseInt(amount)}
};

export const withdraw = (amount) => {
    return {type: 'WITHDRAW', amount: parseInt(amount)}
};

export const interest = () => {
    return {type: 'INTEREST'}
};

export const deleteAccount = () => {
    return {type: 'DELETE_ACCOUNT'}
};

export const switchAccount = () => {
    return {type: 'CHANGE_ACCOUNT'}
};

export const loggedIn = () => {
    return {type: 'TOGGLE_LOGIN'}
};