import React, { createContext, useContext, useReducer } from 'react';
import { ACTIONS } from '../helpers/consts';
import { calcTotalPrice } from '../helpers/functions';

export const cartConext = createContext();
export const useCart = () => useContext(cartConext);

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem('cart')),
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_CART:
      return { ...state, cart: action.payload };
    default:
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart'));

    if (!cart) {
      localStorage.setItem(
        'cart',
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );

      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    dispatch({ type: ACTIONS.GET_CART, payload: cart });
  };

  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart'));

    if (!cart) {
      cart = { product: [], totalPrice: 0 };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };

    let productToFind = cart.products.filter(
      (elem) => elem.item.id === product.id
    );

    if (productToFind.length === 0) {
      cart.products.push(newProduct);
    } else {
      cart.products = cart.products.filter(
        (elem) => elem.item.id !== product.id
      );
    }

    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem('cart', JSON.stringify('cart'));
    dispatch({ type: ACTIONS.GET_CART, payload: cart });
  };

  const values = { getCart, addProductToCart, cart: state.cart };
  return <cartConext.Provider value={values}>{children}</cartConext.Provider>;
};

export default CartContextProvider;
