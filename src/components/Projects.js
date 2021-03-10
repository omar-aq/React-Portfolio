import React from "react";
import { Link } from "react-router-dom";

//material ui
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
} from "@material-ui/core";
//icons
import { GoStar, GoRepoForked } from "react-icons/go";
const Projects = ({ name, id, description, stargazers_count, forks }) => {
  return (
    <Box m={1} p={1}>
      <Card style={{ width: "100%" }} key={id}>
        <CardContent>
          <Typography color="textPrimary">{name}</Typography>
          <Typography>
            <GoStar />
            {stargazers_count}
            <GoRepoForked />
            {forks}
          </Typography>
          <CardActions>
            <Link to={`/project/${id}`}>
              <Button color="primary" variant="outlined" size="small">
                Learn More
              </Button>
            </Link>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Projects;
