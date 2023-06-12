import { Box, TextField, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useParams } from "react-router-dom";

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

  console.log(productDetails);

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

  return (
    <Box sx={{ width: "60vw", margin: "10vh auto" }}>
      <Typography variant="h4" align="center">
        EDIT PRODUCT
      </Typography>
      <TextField
        fullWidth
        name="title"
        label="title"
        variant="outlined"
        onChange={handleInp}
        value={product.title}
      />
      <TextField
        fullWidth
        name="pic1"
        label="picture 1"
        variant="outlined"
        onChange={handleInp}
        value={product.pic1}
      />
      <TextField
        fullWidth
        name="pic2"
        label="picture 2"
        variant="outlined"
        onChange={handleInp}
        value={product.pic2}
      />
      <TextField
        fullWidth
        name="pic3"
        label="picture 3"
        variant="outlined"
        onChange={handleInp}
        value={product.pic3}
      />
      <TextField
        fullWidth
        name="price"
        label="price"
        variant="outlined"
        onChange={handleInp}
        value={product.price}
      />
      <TextField
        fullWidth
        name="category"
        label="caregory"
        variant="outlined"
        onChange={handleInp}
        value={product.category}
      />
      <Button
        fullWidth
        variant="outlined"
        size="large"
        onClick={() => saveEditedProduct(product)}
      >
        Save changes
      </Button>
    </Box>
  );
};

export default EditProduct;
