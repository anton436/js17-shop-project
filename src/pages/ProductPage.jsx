import React from "react";
import ProductList from "../components/product/ProductList";
import Sidebar from "../components/product/Sidebar";
import { Grid } from "@mui/material";

const ProductPage = () => {
  return (
    <div>
      <Grid container>
        <Sidebar />
        <ProductList />
      </Grid>
    </div>
  );
};

export default ProductPage;
