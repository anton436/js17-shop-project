import { Box, Button, TextField, Typography } from "@mui/material";
<<<<<<< HEAD
import React, { useState } from "react";
import { useProducts } from "../contexts/ProductContextProvider";
=======
import React from "react";
import { useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
>>>>>>> 91796cc7958dcb962cb9ba9ef287864e25859692

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
<<<<<<< HEAD
=======

>>>>>>> 91796cc7958dcb962cb9ba9ef287864e25859692
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
