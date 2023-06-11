import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { ACTION, API } from "../helpers/consts";

export const productContext = createContext();

export const useProduct = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTION.GET_PRODUCTS:
      return { ...state, products: action.payload };

    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getProducts = async () => {
    const { data } = await axios(API);
    dispatch({ type: ACTION.GET_PRODUCTS, payload: data });
  };

  console.log(state);
  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
  };

  const values = { addProduct, getProducts, products: state.products };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
