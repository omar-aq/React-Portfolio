import React from "react";
import { useState } from "react";
// material ui
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  makeStyles,
} from "@material-ui/core";

//icons
import { RiMenuLine } from "react-icons/ri";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});

const Navigation = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <RiMenuLine />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <a className={classes.link} href="#projects">
              <MenuItem onClick={handleClose}>Projects</MenuItem>
            </a>
            <a className={classes.link} href="#about">
              <MenuItem onClick={handleClose}>About</MenuItem>
            </a>
            <a className={classes.link} href="#form">
              <MenuItem onClick={handleClose}>Contact</MenuItem>
            </a>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navigation;
