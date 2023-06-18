import {
  Box,
  Button,
  createStyles,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";

import React from "react";

import { useProducts } from "../../contexts/ProductContextProvider";

const styles = {
  formControlLabel: { fontSize: "0.6rem", "& label": { fontSize: "0.6rem" } },
};
const Sidebar = () => {
  const { fetchByParams } = useProducts();

  return (
    <Grid item md={3}>
      <Paper elevation={3} sx={{ p: 2, boxShadow: 0, marginLeft: "20%" }}>
        <FormControl>
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{ "&:hover": "red" }}
          >
            Category
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="All"
            name="radio-buttons-group"
            onChange={(e) => fetchByParams("category", e.target.value)}
          >
            <FormControlLabel
              style={styles.formControlLabel}
              value="All"
              control={<Radio sx={{ display: "none" }} />}
              label="All"
              sx={{
                margin: "10%",

                "&:hover": {
                  color: "red",
                  backgroundColor: "transparent",
                },
              }}
            />
            <FormControlLabel
              value="Clothes"
              control={<Radio sx={{ display: "none" }} />}
              label="Clothes"
              sx={{
                margin: "10%",
                "&:hover": {
                  color: "red",
                  backgroundColor: "transparent",
                },
              }}
            />
            <FormControlLabel
              value="Shoes"
              control={<Radio sx={{ display: "none" }} />}
              label="Shoes"
              sx={{
                margin: "10%",

                "&:hover": {
                  color: "red",
                  backgroundColor: "transparent",
                },
              }}
            />
            <FormControlLabel
              value="Accessories"
              control={<Radio sx={{ display: "none" }} />}
              label="Accessories"
              sx={{
                margin: "10%",
                "&:hover": {
                  color: "red",
                  backgroundColor: "transparent",
                },
                "&:active": {
                  backgroundColor: "red",
                  color: "white",
                },
              }}
            />
          </RadioGroup>
        </FormControl>
        <Divider />
        <FormControl>
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{ marginBottom: "5%", marginTop: "5%" }}
          >
            Sort By Price
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="All"
            name="radio-buttons-group"
            onChange={(e) => fetchByParams("_sort", e.target.value)}
          >
            <FormControlLabel
              value="All"
              control={<Radio sx={{ display: "none" }} />}
              label="All"
              sx={{
                marginTop: "50%",
                margin: "5%",
                "&:hover": {
                  color: "red",
                  backgroundColor: "transparent",
                },
              }}
            />
            <FormControlLabel
              value="asc"
              control={<Radio sx={{ display: "none" }} />}
              label="Low to High"
              sx={{
                margin: "5%",
                "&:hover": {
                  color: "red",
                  backgroundColor: "transparent",
                },
              }}
            />
            <FormControlLabel
              value="desc"
              control={<Radio sx={{ display: "none" }} />}
              label="High to Low"
              sx={{
                margin: "5%",
                width: "100%",
                "&:hover": {
                  color: "red",
                  backgroundColor: "transparent",
                },
              }}
            />
          </RadioGroup>
        </FormControl>
      </Paper>
      <h3 style={{ marginLeft: "30%", marginTop: "5%" }}>FILTER-BY</h3>
      <button
        a
        href="#"
        style={{
          marginLeft: "27%",
          marginTop: "5%",
          cursor: "pointer",
          backgroundColor: "transparent",
          border: "none",
          textAlign: "1px",
        }}
      >
        очистить фильтр
      </button>
      <Box sx={{ width: "65%", marginLeft: "20%", marginTop: "5%" }}>
        <Button
          sx={{
            backgroundColor: "rgb(240,240,240)",
            color: "gray",
            "&:hover": {
              backgroundColor: "red",
              color: "white",
            },
          }}
        >
          Все
        </Button>
        <Button
          sx={{
            width: "50%",
            backgroundColor: "rgb(240,240,240)",
            color: "gray",
            "&:hover": {
              backgroundColor: "red",
              color: "white",
            },
          }}
        >
          Распродажа
        </Button>
        <Button
          sx={{
            width: "50%",
            backgroundColor: "rgb(240,240,240)",
            color: "gray",
            marginTop: "5%",
            "&:hover": {
              backgroundColor: "red",
              color: "white",
            },
          }}
        >
          Новинки
        </Button>
      </Box>
      <Box sx={{ marginLeft: "17%", marginTop: "15%" }}>
        <h1>Размер</h1>
        <Button
          sx={{
            backgroundColor: "rgb(240,240,240)",
            margin: "2%",
            color: "black",
            "&:hover": {
              color: "red",
            },
          }}
        >
          4
        </Button>
        <Button
          sx={{
            backgroundColor: "rgb(240,240,240)",
            margin: "2%",
            color: "black",
            "&:hover": {
              color: "red",
            },
          }}
        >
          5
        </Button>
        <Button
          sx={{
            backgroundColor: "rgb(240,240,240)",
            margin: "2%",
            color: "black",
            "&:hover": {
              color: "red",
            },
          }}
        >
          36
        </Button>
        <Button
          sx={{
            backgroundColor: "rgb(240,240,240)",
            margin: "2%",
            color: "black",
            "&:hover": {
              color: "red",
            },
          }}
        >
          37
        </Button>
        <Button
          sx={{
            backgroundColor: "rgb(240,240,240)",
            margin: "2%",
            color: "black",
            "&:hover": {
              color: "red",
            },
          }}
        >
          37,5
        </Button>
        <Button
          sx={{
            backgroundColor: "rgb(240,240,240)",
            margin: "2%",
            color: "black",
            "&:hover": {
              color: "red",
            },
          }}
        >
          38
        </Button>
        <Button
          sx={{
            backgroundColor: "rgb(240,240,240)",
            margin: "2%",
            color: "black",
            "&:hover": {
              color: "red",
            },
          }}
        >
          38,5
        </Button>
        <Button
          sx={{
            backgroundColor: "rgb(240,240,240)",
            margin: "2%",
            color: "black",
            "&:hover": {
              color: "red",
            },
          }}
        >
          39
        </Button>
        <Button
          sx={{
            backgroundColor: "rgb(240,240,240)",
            margin: "2%",
            color: "black",
            "&:hover": {
              color: "red",
            },
          }}
        >
          40
        </Button>
        <Button
          sx={{
            backgroundColor: "rgb(240,240,240)",
            margin: "2%",
            color: "black",
            "&:hover": {
              color: "red",
            },
          }}
        >
          40,5
        </Button>
        <Button
          sx={{
            backgroundColor: "rgb(240,240,240)",
            margin: "2%",
            color: "black",
            "&:hover": {
              color: "red",
            },
          }}
        >
          41
        </Button>
        <Button
          sx={{
            backgroundColor: "rgb(240,240,240)",
            margin: "2%",
            color: "black",
            "&:hover": {
              color: "red",
            },
          }}
        >
          42,5
        </Button>
        <Button
          sx={{
            backgroundColor: "rgb(240,240,240)",
            margin: "2%",
            color: "black",
            "&:hover": {
              color: "red",
            },
          }}
        >
          43
        </Button>
        <Button
          sx={{
            backgroundColor: "rgb(240,240,240)",
            margin: "2%",
            color: "black",
            "&:hover": {
              color: "red",
            },
          }}
        >
          44
        </Button>
        <Button
          sx={{
            backgroundColor: "rgb(240,240,240)",
            margin: "2%",
            color: "black",
            "&:hover": {
              color: "red",
            },
          }}
        >
          44,5
        </Button>
        <Button
          sx={{
            backgroundColor: "rgb(240,240,240)",
            margin: "2%",
            color: "black",
            "&:hover": {
              color: "red",
            },
          }}
        >
          45
        </Button>
        <Button
          sx={{
            backgroundColor: "rgb(240,240,240)",
            margin: "2%",
            color: "black",
            "&:hover": {
              color: "red",
            },
          }}
        >
          46
        </Button>
        <Button
          sx={{
            backgroundColor: "rgb(240,240,240)",
            margin: "2%",
            color: "black",
            "&:hover": {
              color: "red",
            },
          }}
        >
          47
        </Button>
        <Button
          sx={{
            backgroundColor: "rgb(240,240,240)",
            margin: "2%",
            color: "black",
            "&:hover": {
              color: "red",
            },
          }}
        >
          s/m
        </Button>
        <Button
          sx={{
            backgroundColor: "rgb(240,240,240)",
            margin: "2%",
            color: "black",
            "&:hover": {
              color: "red",
            },
          }}
        >
          m
        </Button>
        <Button
          sx={{
            backgroundColor: "rgb(240,240,240)",
            margin: "2%",
            color: "black",
            "&:hover": {
              color: "red",
            },
          }}
        >
          l
        </Button>
        <Button
          sx={{
            backgroundColor: "rgb(240,240,240)",
            margin: "2%",
            color: "black",
            "&:hover": {
              color: "red",
            },
          }}
        >
          l/xl
        </Button>
        <Button
          sx={{
            backgroundColor: "rgb(240,240,240)",
            margin: "2%",
            color: "black",
            "&:hover": {
              color: "red",
            },
          }}
        >
          xl
        </Button>
        <Button
          sx={{
            backgroundColor: "rgb(240,240,240)",
            margin: "2%",
            color: "black",
            "&:hover": {
              color: "red",
            },
          }}
        >
          xxl
        </Button>
        <Button
          sx={{
            backgroundColor: "rgb(240,240,240)",
            margin: "2%",
            color: "black",
            "&:hover": {
              color: "red",
            },
          }}
        >
          adult
        </Button>
        <Button
          sx={{
            backgroundColor: "rgb(240,240,240)",
            margin: "2%",
            color: "black",
            "&:hover": {
              color: "red",
            },
          }}
        >
          adult
        </Button>
        <Button
          sx={{
            backgroundColor: "rgb(240,240,240)",
            margin: "2%",
            color: "black",
            "&:hover": {
              color: "red",
            },
          }}
        >
          one
        </Button>
        s
      </Box>
    </Grid>
  );
};

export default Sidebar;
