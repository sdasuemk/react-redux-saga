export const addToCart = (product) => {
    console.warn('addToCart action is deprecated', product);
    return {
        type: 'ADD_TO_CART',
        payload: product,
    }
}
export const removeToCart = (text) => {
    console.warn('removeToCart action is deprecated', text);
    return {
        type: 'REMOVE_TO_CART',
        //payload: text,
    }
}
export const getSagaExample = (text) => {
    console.warn('get saga example', text);
    return {
        type: 'GET_SAGA_EXAMPLE',
        //payload: text,
    }
}