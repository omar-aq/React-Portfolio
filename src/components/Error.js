import React from "react";

import { Grid, Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import Pic from "../icons/error.svg";

const Error = () => {
  return (
    <Grid container alignItems="center" direction="column">
      <Box m={5}>
        <Grid item>
          <img width="70%" src={Pic} alt="error-pic" />
        </Grid>
      </Box>
      <Box m={5}>
        <Grid item>
          <Link to="/">
            <Button color="primary" variant="contained">
              Go Home
            </Button>
          </Link>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Error;
