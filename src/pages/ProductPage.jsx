import React from "react";
import ProductList from "../components/product/ProductList";
import SideBar from "../components/product/Sidebar";
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
