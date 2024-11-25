export const cartInitialState = [];

export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART',
}

export const cartReducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action;
    switch (actionType) {
        case CART_ACTION_TYPES.ADD_TO_CART: { 
            const { id } = actionPayload;
            const productInCartIndex = state.findIndex(item => item.id === id);
            if(productInCartIndex >= 0) {
                const newCart = structuredClone(state);
                newCart[productInCartIndex].quantity += 1;
                return newCart;
            }
            return [...state, {...actionPayload, quantity: 1}]
        }
        case CART_ACTION_TYPES.CLEAR_CART:{
            return cartInitialState
        }
        case CART_ACTION_TYPES.REMOVE_FROM_CART: {	
            const { id } = actionPayload;
            return state.filter(item => item.id !== id);
        }  
    }
} 