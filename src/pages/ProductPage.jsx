import { Grid } from '@mui/material';
import React from 'react';
import ProductList from '../components/product/ProductList';
import Sidebar from '../components/product/Sidebar';

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
