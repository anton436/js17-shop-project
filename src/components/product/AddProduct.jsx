import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    pic1: "",
    pic2: "",
    pic3: "",
    price: 0,
    category: "",
  });

  const { addProduct } = useProducts();

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
        ADMIN PAGE
      </Typography>
      <TextField
        onChange={handleInp}
        fullWidth
        name="title"
        label="title"
        variant="outlined"
      />
      <TextField
        onChange={handleInp}
        fullWidth
        name="pic1"
        label="picture 1"
        variant="outlined"
      />
      <TextField
        onChange={handleInp}
        fullWidth
        name="pic2"
        label="picture 2"
        variant="outlined"
      />
      <TextField
        onChange={handleInp}
        fullWidth
        name="pic3"
        label="picture 3"
        variant="outlined"
      />
      <TextField
        onChange={handleInp}
        fullWidth
        name="price"
        label="price"
        variant="outlined"
      />
      <TextField
        fullWidth
        name="category"
        label="category"
        variant="outlined"
        onChange={handleInp}
      />
      <Button
        onClick={() => addProduct(product)}
        fullWidth
        variant="outlined"
        size="large"
      >
        ADD PRODUCT
      </Button>
    </Box>
  );
};

export default AddProduct;
