<<<<<<< HEAD
import { Box, TextField, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useParams } from "react-router-dom";
import { Category } from "@mui/icons-material";
=======
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
>>>>>>> 7477af825bc2f4e6a619bd16a66f8b336c176a4b
import CategorySelect from "./CategorySelect";

const EditProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    pic1: "",
    pic2: "",
    pic3: "",
    price: 0,
    category: "",
  });
<<<<<<< HEAD
=======

>>>>>>> 7477af825bc2f4e6a619bd16a66f8b336c176a4b
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
>>>>>>> 7477af825bc2f4e6a619bd16a66f8b336c176a4b
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
  console.log(product);
>>>>>>> 7477af825bc2f4e6a619bd16a66f8b336c176a4b
  return (
    <Box sx={{ width: "60vw", margin: "10vh auto" }}>
      <Typography variant="h4" align="center">
        EDIT PRODUCT
      </Typography>
      <TextField
<<<<<<< HEAD
=======
        onChange={handleInp}
>>>>>>> 7477af825bc2f4e6a619bd16a66f8b336c176a4b
        fullWidth
        name="title"
        label="title"
        variant="outlined"
<<<<<<< HEAD
        onChange={handleInp}
        value={product.title}
      />
      <TextField
=======
        value={product.title}
      />
      <TextField
        onChange={handleInp}
>>>>>>> 7477af825bc2f4e6a619bd16a66f8b336c176a4b
        fullWidth
        name="pic1"
        label="picture 1"
        variant="outlined"
<<<<<<< HEAD
        onChange={handleInp}
        value={product.pic1}
      />
      <TextField
=======
        value={product.pic1}
      />
      <TextField
        onChange={handleInp}
>>>>>>> 7477af825bc2f4e6a619bd16a66f8b336c176a4b
        fullWidth
        name="pic2"
        label="picture 2"
        variant="outlined"
<<<<<<< HEAD
        onChange={handleInp}
        value={product.pic2}
      />
      <TextField
=======
        value={product.pic2}
      />
      <TextField
        onChange={handleInp}
>>>>>>> 7477af825bc2f4e6a619bd16a66f8b336c176a4b
        fullWidth
        name="pic3"
        label="picture 3"
        variant="outlined"
<<<<<<< HEAD
        onChange={handleInp}
        value={product.pic3}
      />
      <TextField
=======
        value={product.pic3}
      />
      <TextField
        onChange={handleInp}
>>>>>>> 7477af825bc2f4e6a619bd16a66f8b336c176a4b
        fullWidth
        name="price"
        label="price"
        variant="outlined"
<<<<<<< HEAD
        onChange={handleInp}
        value={product.price}
      />
      <CategorySelect product={product} setProduct={setProduct} />
      <Button
        fullWidth
        variant="outlined"
        size="large"
        onClick={() => saveEditedProduct(product)}
      >
        Save changes
=======
        value={product.price}
      />
      <CategorySelect product={product} setProduct={setProduct} />

      <Button
        onClick={() => saveEditedProduct(product)}
        fullWidth
        variant="outlined"
        size="large"
      >
        SAVE CHANGES
>>>>>>> 7477af825bc2f4e6a619bd16a66f8b336c176a4b
      </Button>
    </Box>
  );
};

export default EditProduct;
