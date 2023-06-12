<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useProducts } from "../contexts/ProductContextProvider";
import ProductCard from "./ProductCard";
import { Box, Grid, Pagination } from "@mui/material";
=======
import { Box, Grid, Pagination } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import ProductCard from "./ProductCard";
>>>>>>> 91796cc7958dcb962cb9ba9ef287864e25859692

const ProductList = () => {
  const { getProducts, products } = useProducts();
  useEffect(() => {
    getProducts();
  }, []);
<<<<<<< HEAD

  //pagination
=======
  // pagination
>>>>>>> 91796cc7958dcb962cb9ba9ef287864e25859692
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  const count = Math.ceil(products.length / itemsPerPage);

  const handleChange = (e, p) => {
    setPage(p);
  };

<<<<<<< HEAD
  function currentDate() {
=======
  function currentData() {
>>>>>>> 91796cc7958dcb962cb9ba9ef287864e25859692
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }
<<<<<<< HEAD
  //pagination
=======

  // pagination

>>>>>>> 91796cc7958dcb962cb9ba9ef287864e25859692
  return (
    <Grid item md={9}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
<<<<<<< HEAD
        {currentDate().map((item) => (
=======
        {currentData().map((item) => (
>>>>>>> 91796cc7958dcb962cb9ba9ef287864e25859692
          <ProductCard key={item.id} item={item} />
        ))}
      </Box>
      <Pagination count={count} page={page} onChange={handleChange} />
    </Grid>
  );
};

export default ProductList;
