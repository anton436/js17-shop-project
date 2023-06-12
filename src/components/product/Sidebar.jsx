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

const Sidebar = () => {
  return (
    <Grid item md={3}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <TextField fullWidth label="search..." variant="standard" />
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="All"
            name="radio-buttons-group"
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
