import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
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
      <CategorySelect product={product} setProduct={setProduct} />
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
