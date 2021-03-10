import React from "react";
//material ui
import { Box, Grid, Button, Typography } from "@material-ui/core";

//personal pic
import Pic from "../icons/person.svg";

const PersonInfo = () => {
  return (
    <Grid container justify="space-around">
      <Grid item xs={12} sm={12} md={6}>
        <Box p={5} m={5}>
          <Typography variant="h4" color="primary">
            Omar Nayef
          </Typography>
          <Typography variant="h5" color="textSecondary">
            Software Engineer. Frontend Web Developer(React.js)
          </Typography>

          <a href="#form">
            <Button color="primary" variant="contained">
              Contact Me
            </Button>
          </a>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Box p={5} m={5}>
          <img width="100%" height="auto" src={Pic} alt="person" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default PersonInfo;
