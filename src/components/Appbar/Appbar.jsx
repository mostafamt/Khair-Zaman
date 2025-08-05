import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Appbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="sm">
          <Toolbar sx={{ padding: "0 !important" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Link to={"/"} style={{ textDecoration: "none", color: "#fff" }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Khair Zaman
              </Typography>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Appbar;
