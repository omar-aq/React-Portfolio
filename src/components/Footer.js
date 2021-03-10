import React from "react";

import { Grid, Box, Typography, IconButton, Link } from "@material-ui/core";

import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const Footer = () => {
  return (
    <Box mt={5} p={5}>
      <Grid container justify="space-between">
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="body2" color="textSecondary" align="center">
            Copyright © Omar Nayef
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} align="center">
          <IconButton color="inherit">
            <Link
              target={"_blank"}
              color="inherit"
              href="https://github.com/omar-aq"
            >
              <GrGithub />
            </Link>
          </IconButton>
          <IconButton color="inherit">
            <Link
              target={"_blank"}
              color="inherit"
              href="https://www.linkedin.com/in/omar-nayef-2b00771a6/"
            >
              <FaLinkedin />
            </Link>
          </IconButton>
          <IconButton color="inherit">
            <Link
              target={"_blank"}
              color="inherit"
              href="https://www.upwork.com/"
            >
              <SiUpwork />
            </Link>
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
