import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { ACTION, API } from "../helpers/consts";
import { useNavigate } from "react-router-dom";

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
    case ACTION.GET_PRODUCTS:
      return { ...state, products: action.payload };

    case ACTION.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };

    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();
  const [oneProduct, setOneProduct] = useState(null);

  async function getOneProduct(id) {
    const { data } = await axios.get(`${API}/${id}`);
    setOneProduct(data);
  }

  //! get request (READ)
  const getProducts = async () => {
    const { data } = await axios(`${API}/${window.location.search}`);
    dispatch({ type: ACTION.GET_PRODUCTS, payload: data });
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
    dispatch({ type: ACTION.GET_PRODUCT_DETAILS, payload: data });
  };

  //! patch request (UPDATE PRODUCT)
  const saveEditedProduct = async (editedProduct) => {
    await axios.patch(`${API}/${editedProduct.id}`, editedProduct);
    navigate(`/products`);
  };

  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(window.location.search);
    if (value === "Al") {
      search.delete(query);
    } else if (query === "_sort") {
      search.set(query, "price");
      search.set("_order", value);
    } else {
      search.set(query, value);
    }
    const url = `${window.location.pathname}?${search.toString()}`;
    navigate(url);
  };

  const values = {
    addProduct,
    getProducts,
    products: state.products,
    deleteProduct,
    oneProduct,
    getOneProduct,
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
