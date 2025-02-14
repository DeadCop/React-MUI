import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import logo from "./assets/logo.png";
import { makeStyles } from "@mui/styles";

function Appbar({ compChange }) {
  return (
    <AppBar
      position="sticky"
      elevation={1}
      style={{ background: "rgba(255, 255, 255, .7)" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
Appbar.propTypes = {
  compChange: PropTypes.func,
};

export default Appbar;
