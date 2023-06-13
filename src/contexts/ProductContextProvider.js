import axios from 'axios';
import React, { createContext, useContext, useReducer, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { ACTIONS, API } from '../helpers/consts';

export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
  productDetails: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };

    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };

    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();

  //! get request (READ)
  const getProducts = async () => {
    const { data } = await axios(API);
    dispatch({ type: ACTIONS.GET_PRODUCTS, payload: data });
  };

  //! post request (CREATE)
  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
  };

  //! delete request (DELETE)

  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };

  //! get one product info
  const getProductDetails = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({ type: ACTIONS.GET_PRODUCT_DETAILS, payload: data });
  };

  //! patch request (UPDATE PRODUCT)
  const saveEditedProduct = async (editedProduct) => {
    await axios.patch(`${API}/${editedProduct.id}`, editedProduct);
    navigate(`/products`);
  };

  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(window.location.search);
    if (value === 'All') {
      search.delete(query);
    } else {
      search.set(query, value);
    }

    const url = `${window.location.pathname}?${search.toString()}}`;
    navigate(url);
  };

  const values = {
    addProduct,
    getProducts,
    products: state.products,
    deleteProduct,
    getProductDetails,
    productDetails: state.productDetails,
    saveEditedProduct,
    fetchByParams,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
