import React, { useEffect } from "react";
import { useProduct } from "../../contexts/ProductContextProvider";
import ProductCard from "./ProductCard";
import { Box } from "@mui/material";

const ProductList = () => {
  const { getProducts, products } = useProduct();
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}
    >
      {products.map((item) => (
        <ProductCard key={item.id} />
      ))}
    </Box>
  );
};

export default ProductList;
