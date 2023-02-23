const counterReducer = (state = 0, action) => {
    //it takes two parameters-->state and action
    switch (action.type) {
        case 'increment':
            return state + action.payload;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
}

export default counterReducer;