import { Box, Grid, Pagination } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useProducts } from "../../contexts/ProductContextProvider";

const ProductList = () => {
  const { getProducts, products } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  // pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  const count = Math.ceil(products.length / itemsPerPage);

  const handleChange = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  // pagination

  return (
    <Grid item md={9}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {currentData().map((item) => (
          <ProductCard key={item.id} item={item} sx />
        ))}
      </Box>
      <Pagination count={count} page={page} onChange={handleChange} />
    </Grid>
  );
};

export default ProductList;
