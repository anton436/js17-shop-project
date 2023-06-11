import { Box, TextField, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { useProduct } from "../../contexts/ProductContextProvider";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    pic1: "",
    pic2: "",
    pic3: "",
    price: 0,
    category: "",
  });
  const { addProduct } = useProduct();

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = { ...product, [e.target.name]: Number(e.target.value) };
      setProduct(obj);
    } else {
      let obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
    }
  };

  return (
    <Box sx={{ width: "60vw", margin: "10vh auto" }}>
      <Typography variant="h4" align="center">
        Admin page
      </Typography>
      <TextField
        fullWidth
        name="title"
        label="title"
        variant="outlined"
        onChange={handleInp}
      />
      <TextField
        fullWidth
        name="pic1"
        label="picture 1"
        variant="outlined"
        onChange={handleInp}
      />
      <TextField
        fullWidth
        name="pic2"
        label="picture 2"
        variant="outlined"
        onChange={handleInp}
      />
      <TextField
        fullWidth
        name="pic3"
        label="picture 3"
        variant="outlined"
        onChange={handleInp}
      />
      <TextField
        fullWidth
        name="price"
        label="price"
        variant="outlined"
        onChange={handleInp}
      />
      <TextField
        fullWidth
        name="category"
        label="caregory"
        variant="outlined"
        onChange={handleInp}
      />
      <Button
        fullWidth
        variant="outlined"
        size="large"
        onClick={() => addProduct(product)}
      >
        Add Product
      </Button>
    </Box>
  );
};

export default AddProduct;
