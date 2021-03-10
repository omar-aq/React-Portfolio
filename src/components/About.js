import React from "react";
//material ui
import { Grid, Box, Typography } from "@material-ui/core";

//about pic
import Pic from "../icons/about.svg";

const About = () => {
  return (
    <Grid container justify="center" id="about">
      <Grid item xs={12} sm={12} md={6}>
        <Box p={5} m={5}>
          <img width="100%" height="auto" src={Pic} alt="about" />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Box width="70%" p={5} m={5}>
          <Typography variant="h3" color="textSecondary">
            About Me
          </Typography>
          <Typography variant="h6" color="textSecondary">
            I’ve long been interested in software development and design and
            always enjoy learning about new and exciting technologies. my
            experience in Python Frameworks Django, Bash and JavaScript
            libraries like ReactJs. Also interested in machine learning,
            algorithms, linear algebra. statistics
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;
