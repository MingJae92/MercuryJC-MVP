import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Link to="/" style={{ textDecoration: "none", color: "white", padding: "0 16px" }}>Home</Link>
          <Link to="/gallery" style={{ textDecoration: "none", color: "white", padding: "0 16px" }}>Gallery</Link>
          <Link to="/artwork" style={{ textDecoration: "none", color: "white", padding: "0 16px" }}>Art Work</Link>
          <Link to="/aboutme" style={{ textDecoration: "none", color: "white", padding: "0 16px" }}>About Me</Link>
          <Link to="/signup" style={{ textDecoration: "none", color: "white", padding: "0 16px" }}>Sign Up</Link>
          <Link to="/login" style={{ textDecoration: "none", color: "white", padding: "0 16px" }}>Login</Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
