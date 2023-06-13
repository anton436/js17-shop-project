import {
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

const Sidebar = () => {
  const { fetchByParams } = useProducts();

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <Grid item md={3}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
          label="search..."
          variant="standard"
        />
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="All"
            name="radio-buttons-group"
            onChange={(e) => fetchByParams("category", e.target.value)}
          >
            <FormControlLabel value="All" control={<Radio />} label="All" />
            <FormControlLabel
              value="Clothes"
              control={<Radio />}
              label="Clothes"
            />
            <FormControlLabel value="Shoes" control={<Radio />} label="Shoes" />
            <FormControlLabel
              value="Accessories"
              control={<Radio />}
              label="Accessories"
            />
          </RadioGroup>
        </FormControl>
        <Divider />
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Sort By Price
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="All"
            name="radio-buttons-group"
            onChange={(e) => fetchByParams("_sort", e.target.value)}
          >
            <FormControlLabel value="All" control={<Radio />} label="All" />
            <FormControlLabel
              value="asc"
              control={<Radio />}
              label="Low to High"
            />
            <FormControlLabel
              value="desc"
              control={<Radio />}
              label="High to Low"
            />
          </RadioGroup>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default Sidebar;
