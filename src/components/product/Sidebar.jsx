import {
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
    <Grid md={3}>
      <Paper elevation={3} sx={{ padding: "1rem" }}>
        <TextField fullWidth label="search..." variant="standard" />
        <Divider>
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
              <FormControlLabel
                value="Shoes"
                control={<Radio />}
                label="Shoes"
              />
              <FormControlLabel
                value="Accessories"
                control={<Radio />}
                label="Accessories"
              />
            </RadioGroup>
          </FormControl>
        </Divider>
        <Divider>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Sort by Price
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
                label="Hight to Low"
              />
            </RadioGroup>
          </FormControl>
        </Divider>
      </Paper>
    </Grid>
  );
};

export default Sidebar;
