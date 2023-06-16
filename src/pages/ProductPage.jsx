import React from "react";
import ProductList from "../components/product/ProductList";
import Sidebar from "../components/product/Sidebar";
import { Grid } from "@mui/material";

const ProductPage = () => {
  return (
    <div>
      <Grid container>
        <ProductList />
        <Sidebar />
      </Grid>
    </div>
  );
};

export default ProductPage;
