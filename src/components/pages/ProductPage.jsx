import React from "react";
import ProductList from "../product/ProductList";
import SideBar from "../product/SideBar";
import { Grid } from "@mui/material";

const ProductPage = () => {
  return (
    <div>
      <Grid container>
        <ProductList />
        <SideBar />
      </Grid>
    </div>
  );
};

export default ProductPage;
