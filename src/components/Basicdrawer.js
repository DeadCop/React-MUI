import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  drawer: {},
  drawerPaper: {
    width: 200
  },
  drawerHeader: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: ".5em"
  },
  drawerBrandingText: {
    fontSize: "1.25em",
    fontWeight: 600,
    userSelect: "none",
    "&:hover": {}
  },
  drawerListItem: {
    userSelect: "none",
    cursor: "pointer"
  },
  listSubheader: {
    marginTop: "1em"
  }
}));

const drawerWidth = 200;

export default function LeftBar() {
  const classes = useStyles();
  return (
    <Drawer
    className={classes.drawer}
    classes={{ paper: classes.drawerPaper }}
    variant="permanent"
    anchor="left"
  >
    <Toolbar className={classes.drawerHeader}>
      <Typography className={classes.drawerBrandingText}>App Name</Typography>
    </Toolbar>
  </Drawer>
  );
}
