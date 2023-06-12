<<<<<<< HEAD
import React from "react";
import ProductList from "../components/product/ProductList";
import Sidebar from "../components/product/Sidebar";
import { Grid } from "@mui/material";
=======
import { Grid } from "@mui/material";
import React from "react";
import ProductList from "../components/product/ProductList";
import Sidebar from "../components/product/Sidebar";
>>>>>>> 91796cc7958dcb962cb9ba9ef287864e25859692

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
