import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
<<<<<<< HEAD
import { ACTION, API } from "../helpers/consts";
import { useNavigate } from "react-router-dom";
=======

import { useNavigate } from "react-router-dom";
import { ACTIONS, API } from "../helpers/consts";
>>>>>>> 7477af825bc2f4e6a619bd16a66f8b336c176a4b

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
<<<<<<< HEAD
    case ACTION.GET_PRODUCTS:
      return { ...state, products: action.payload };

    case ACTION.GET_PRODUCT_DETAILS:
=======
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };

    case ACTIONS.GET_PRODUCT_DETAILS:
>>>>>>> 7477af825bc2f4e6a619bd16a66f8b336c176a4b
      return { ...state, productDetails: action.payload };

    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();
<<<<<<< HEAD
  const [oneProduct, setOneProduct] = useState(null);

  async function getOneProduct(id) {
    const { data } = await axios.get(`${API}/${id}`);
    setOneProduct(data);
  }

  //! get request (READ)
  const getProducts = async () => {
    const { data } = await axios(`${API}/${window.location.search}`);
    dispatch({ type: ACTION.GET_PRODUCTS, payload: data });
=======

  //! get request (READ)
  const getProducts = async () => {
    const { data } = await axios(`${API}${window.location.search}`);
    dispatch({ type: ACTIONS.GET_PRODUCTS, payload: data });
>>>>>>> 7477af825bc2f4e6a619bd16a66f8b336c176a4b
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
<<<<<<< HEAD
    dispatch({ type: ACTION.GET_PRODUCT_DETAILS, payload: data });
=======
    dispatch({ type: ACTIONS.GET_PRODUCT_DETAILS, payload: data });
>>>>>>> 7477af825bc2f4e6a619bd16a66f8b336c176a4b
  };

  //! patch request (UPDATE PRODUCT)
  const saveEditedProduct = async (editedProduct) => {
    await axios.patch(`${API}/${editedProduct.id}`, editedProduct);
    navigate(`/products`);
  };

<<<<<<< HEAD
  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(window.location.search);
    if (value === "Al") {
=======
  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(window.location.search);
    if (value === "All") {
>>>>>>> 7477af825bc2f4e6a619bd16a66f8b336c176a4b
      search.delete(query);
    } else if (query === "_sort") {
      search.set(query, "price");
      search.set("_order", value);
    } else {
      search.set(query, value);
    }
<<<<<<< HEAD
=======

>>>>>>> 7477af825bc2f4e6a619bd16a66f8b336c176a4b
    const url = `${window.location.pathname}?${search.toString()}`;
    navigate(url);
  };

  const values = {
    addProduct,
    getProducts,
    products: state.products,
    deleteProduct,
<<<<<<< HEAD
    oneProduct,
    getOneProduct,
    getProductDetails,
    productDetails: state.productDetails,
    saveEditedProduct,
=======
    getProductDetails,
    productDetails: state.productDetails,
    saveEditedProduct,

>>>>>>> 7477af825bc2f4e6a619bd16a66f8b336c176a4b
    fetchByParams,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
