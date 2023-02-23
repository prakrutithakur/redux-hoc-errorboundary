export const increment = (params) => {
    return {
        type: 'increment',
        payload: params

    }
}
export const decrement = () => {
    return {
        type: 'decrement',

    }
}
export const isLogged = () => {
    return {
        type: 'SIGN-IN',

    }
}