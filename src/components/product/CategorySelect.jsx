import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CategorySelect({ product, setProduct }) {
  function handleChange(e) {
    setProduct({ ...product, category: e.target.value });
  }
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue=""
        label="Category"
<<<<<<< HEAD
        name="category"
        value={product.category}
        onChange={handleChange}
      >
        <MenuItem value="CLothes">CLothes</MenuItem>
=======
        value={product.category}
        onChange={handleChange}
      >
        <MenuItem value="Clothes">Clothes</MenuItem>
>>>>>>> 7477af825bc2f4e6a619bd16a66f8b336c176a4b
        <MenuItem value="Shoes">Shoes</MenuItem>
        <MenuItem value="Accessories">Accessories</MenuItem>
      </Select>
    </FormControl>
  );
}
