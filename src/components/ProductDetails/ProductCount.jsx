// Компонент ProductQuantity.js
import React from "react";
import { Button, Typography, Box } from "@mui/material";

const ProductCount = ({ quantity, handleIncrement, handleDecrement }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        marginRight: "169px",
      }}
    >
      <Button variant="outlined" color="secondary" onClick={handleDecrement}>
        -
      </Button>
      <Typography variant="body2">{quantity}</Typography>
      <Button variant="outlined" color="secondary" onClick={handleIncrement}>
        +
      </Button>
    </Box>
  );
};

export default ProductCount;
