import React, { useEffect, useState } from "react";
import { useProducts } from "../contexts/ProductContextProvider";
import ProductCard from "./ProductCard";
import { Box, Grid, Pagination } from "@mui/material";

const ProductList = () => {
  const { getProducts, products } = useProducts();
  useEffect(() => {
    getProducts();
  }, []);

  //pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  const count = Math.ceil(products.length / itemsPerPage);

  const handleChange = (e, p) => {
    setPage(p);
  };

  function currentDate() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }
  //pagination
  return (
    <Grid item md={9}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {currentDate().map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Box>
      <Pagination count={count} page={page} onChange={handleChange} />
    </Grid>
  );
};

export default ProductList;
