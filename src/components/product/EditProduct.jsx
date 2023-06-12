import { Box, Button, TextField, Typography } from "@mui/material";
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useProducts } from "../contexts/ProductContextProvider";
import { useParams } from "react-router-dom";
=======
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
>>>>>>> 91796cc7958dcb962cb9ba9ef287864e25859692

const EditProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    pic1: "",
    pic2: "",
    pic3: "",
    price: 0,
    category: "",
  });

  const { saveEditedProduct, getProductDetails, productDetails } =
    useProducts();

  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    if (productDetails) {
      setProduct(productDetails);
    }
  }, [productDetails]);

<<<<<<< HEAD
  console.log(productDetails);

=======
>>>>>>> 91796cc7958dcb962cb9ba9ef287864e25859692
  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };
<<<<<<< HEAD
=======

>>>>>>> 91796cc7958dcb962cb9ba9ef287864e25859692
  console.log(product);
  return (
    <Box sx={{ width: "60vw", margin: "10vh auto" }}>
      <Typography variant="h4" align="center">
        EDIT PRODUCT
      </Typography>
      <TextField
        onChange={handleInp}
        fullWidth
        name="title"
        label="title"
        variant="outlined"
        value={product.title}
      />
      <TextField
        onChange={handleInp}
        fullWidth
        name="pic1"
        label="picture 1"
        variant="outlined"
        value={product.pic1}
      />
      <TextField
        onChange={handleInp}
        fullWidth
        name="pic2"
        label="picture 2"
        variant="outlined"
        value={product.pic2}
      />
      <TextField
        onChange={handleInp}
        fullWidth
        name="pic3"
        label="picture 3"
        variant="outlined"
        value={product.pic3}
      />
      <TextField
        onChange={handleInp}
        fullWidth
        name="price"
        label="price"
        variant="outlined"
        value={product.price}
      />
      <TextField
<<<<<<< HEAD
        onChange={handleInp}
=======
>>>>>>> 91796cc7958dcb962cb9ba9ef287864e25859692
        fullWidth
        name="category"
        label="category"
        variant="outlined"
<<<<<<< HEAD
=======
        onChange={handleInp}
>>>>>>> 91796cc7958dcb962cb9ba9ef287864e25859692
        value={product.category}
      />
      <Button
        onClick={() => saveEditedProduct(product)}
        fullWidth
        variant="outlined"
        size="large"
      >
        SAVE CHANGES
      </Button>
    </Box>
  );
};

export default EditProduct;
