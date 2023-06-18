import React from "react";
import ProductList from "../components/product/ProductList";

import { Grid } from "@mui/material";
import Sidebar from "../components/product/Sidebar";

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
