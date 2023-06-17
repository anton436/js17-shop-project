import { Box, Button, TableBody, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import CategorySelect from "./CategorySelect";

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

  const handleAddProduct = () => {
    addProduct(product);
    setProduct({
      title: "",
      pic1: "",
      pic2: "",
      pic3: "",
      price: 0,
      category: "",
    });
  };

  return (
    <Box sx={{ paddingBottom: "3%" }}>
      <Typography
        sx={{
          paddingTop: "2%",
          color: "white",
          WebkitTextStroke: "3px black",
          fontWeight: "900",
          fontSize: "44px",
        }}
        variant="h4"
        align="center"
      >
        ADMIN PAGE
      </Typography>
      <Box
        sx={{
          width: "60vw",
          margin: "10px auto",
          backgroundColor: "red",
          padding: "5% 5%",
          boxShadow: "0px 0px 21px 15px rgba(65, 40, 40, 0.2)",
        }}
      >
        <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "20px",
            boxShadow: "0px 0px 30px 32px rgba(166, 212, 48, 0.2)",
            boxShadow: "0px 0px 7px 9px rgba(255, 67, 0, 0.2) inset",
          }}
          fullWidth
          onChange={handleInp}
          name="title"
          label="title"
          variant="outlined"
          value={product.title} // Установка значения из состояния
        />
        <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "20px",
            boxShadow: "0px 0px 30px 32px rgba(166, 212, 48, 0.2)",
            boxShadow: "0px 0px 7px 9px rgba(255, 67, 0, 0.2) inset",
          }}
          fullWidth
          onChange={handleInp}
          name="pic1"
          label="pic1"
          variant="outlined"
          value={product.pic1} // Установка значения из состояния
        />
        <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "20px",
            boxShadow: "0px 0px 30px 32px rgba(166, 212, 48, 0.2)",
            boxShadow: "0px 0px 7px 9px rgba(255, 67, 0, 0.2) inset",
          }}
          fullWidth
          onChange={handleInp}
          name="pic2"
          label="pic2"
          variant="outlined"
          value={product.pic2} // Установка значения из состояния
        />
        <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "20px",
            boxShadow: "0px 0px 30px 32px rgba(166, 212, 48, 0.2)",
            boxShadow: "0px 0px 7px 9px rgba(255, 67, 0, 0.2) inset",
          }}
          fullWidth
          onChange={handleInp}
          name="pic3"
          label="pic3"
          variant="outlined"
          value={product.pic3} // Установка значения из состояния
        />
        <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "20px",
            boxShadow: "0px 0px 30px 32px rgba(166, 212, 48, 0.2)",
            boxShadow: "0px 0px 7px 9px rgba(255, 67, 0, 0.2) inset",
          }}
          fullWidth
          onChange={handleInp}
          name="price"
          label="price"
          variant="outlined"
          value={product.price} // Установка значения из состояния
        />
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
        >
          <CategorySelect product={product} setProduct={setProduct} />
        </Box>

        <Box sx={{ backgroundColor: "orange", borderRadius: "5px" }}>
          <Button
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              color: "black",
              fontSize: "22px",
              fontWeight: "900",
              fontFamily: "segoe ui",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
            onClick={handleAddProduct}
            fullWidth
            variant="outlined"
            size="large"
            className="admin__button"
          >
            ADD PRODUCT
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddProduct;
