import { useReducer } from "react";
import { createContext, useState } from "react";
import { cartReducer, cartInitialState } from "../reducers/cart.js"; 

export const CartContext = createContext();

function useCartReducer() {
    const [state , dispatch] = useReducer(cartReducer, cartInitialState);
    
    const addToCart = product => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    }
    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    }

    const  removeFromCart = id => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    }
    return {state, addToCart, clearCart, removeFromCart};
}

export function CartProvider({ children }) {
    const {state, addToCart, clearCart, removeFromCart} = useCartReducer();
    return (
    <CartContext.Provider value={{cart: state, addToCart, clearCart, removeFromCart}}>
        {children}
    </CartContext.Provider>
  );
}