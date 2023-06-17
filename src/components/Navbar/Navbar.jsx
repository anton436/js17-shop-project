import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, useSearchParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
<<<<<<< HEAD

import { Badge, TextField } from "@mui/material";
=======
import { TextField } from "@mui/material";
>>>>>>> 9eb0770e4f68b3938916348890b10470a4e52d68
import { styled } from "@mui/system";
import BadgedCartIcon from "./BadgedCartIcon";
import { useCart } from "../../contexts/CartContextProvider";
import { getCountProductsInCart } from "../../helpers/functions";
import { useAuth } from "../../contexts/AuthContextProvider";
import { ADMIN } from "../../helpers/consts";
import { useState } from "react";
import { useEffect } from "react";
<<<<<<< HEAD
import { getCountProductsInCart } from "../../helpers/functions";
import { useAuth } from "../../contexts/AuthContextProvider";
import { ADMIN } from "../../helpers/consts";

const pages = [
  { name: "Одежда", link: "/", id: 1 },
  { name: "Правила PUMA", link: "/products", id: 2 },
=======

const pages = [
  { name: "Главная", link: "/", id: 1 },
  { name: "Каталог", link: "/products", id: 2 },
>>>>>>> 9eb0770e4f68b3938916348890b10470a4e52d68
  // { name: "ADMIN", link: "/admin", id: 3 },
];
const settings = ["Profile", "Account", "Dashboard"];

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [count, setCount] = React.useState(0);

  const { addProductToCart } = useCart();

  React.useEffect(() => {
    setCount(getCountProductsInCart());
  }, [addProductToCart]);

  const {
    handleLogout,
    user: { email },
  } = useAuth();
<<<<<<< HEAD
=======

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({ q: search });
  }, [search]);

>>>>>>> 9eb0770e4f68b3938916348890b10470a4e52d68
  return (
    <AppBar position="static" sx={{ backgroundColor: "#222" }}>
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: "#222",
          height: "85px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Toolbar disableGutters sx={{ width: "100%" }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              src="https://www.transparentpng.com/thumb/puma-logo/It9NZf-puma-logo-transparent.png"
              alt=""
              width="40px"
              className="puma_icon"
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link key={page.id} to={page.link}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
              {email === ADMIN ? (
                <Link to="/admin">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">ADMIN</Typography>
                  </MenuItem>
                </Link>
              ) : null}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link key={page.id} to={page.link}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontSize: "18px",
                    color: "gray",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
            {email === ADMIN ? (
              <Link to="/admin">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontSize: "18px",
                    color: "gray",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  ADMIN
                </Button>
              </Link>
            ) : null}
          </Box>
          <Box
            sx={{
              border: "1px solid",
              display: "flex",
              alignItems: "center",
              width: "300px",
              height: "40px",
            }}
          >
            <SearchIcon sx={{ marginLeft: "10px", marginRight: "10px" }} />

            <TextField
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              fullWidth
              label="search..."
              variant="standard"
            />
          </Box>
          <Box></Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, marginLeft: "10px" }}
              >
                <img
                  src="https://cdn3.iconfinder.com/data/icons/2px-stroke-simple-line/24/person-key-512.png"
                  alt=""
                  width="45px"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              Mounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {email ? (
                <MenuItem>
<<<<<<< HEAD
                  <Typography textAlign="center">hello , {email}</Typography>
=======
                  <Typography textAlign="center">hello, {email}!</Typography>
>>>>>>> 9eb0770e4f68b3938916348890b10470a4e52d68
                </MenuItem>
              ) : null}

              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
              <MenuItem
                onClick={() => {
                  handleCloseUserMenu();
                  handleLogout();
                }}
              >
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Link to="/cart">
            <BadgedCartIcon count={count} />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
