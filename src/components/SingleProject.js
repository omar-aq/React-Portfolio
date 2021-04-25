import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { GoStar, GoRepoForked } from "react-icons/go";

import { Box, Button, Grid, Typography } from "@material-ui/core";

import Pic from "../icons/project.svg";

const SingleProject = () => {
  const [projects, setProjects] = useState([]);
  const { id } = useParams();
  const getProject = async () => {
    const response = await fetch("https://api.github.com/users/omar-aq/repos");
    const data = await response.json();
    setProjects(data);
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <>
      <Grid container justify="center">
        <Box p={10}>
          <img width="60%" src={Pic} alt="project-pic" />
          {projects.map((item) => {
            const {
              name,
              description,
              forks,
              stargazers_count,
              html_url,
            } = item;
            if (item.id === parseInt(id)) {
              return (
                <Box key={item.id}>
                  <Box p={2}>
                    <Typography variant="h6">{name}</Typography>
                  </Box>
                  <Box p={2}>
                    <Typography color="textSecondary">{description}</Typography>
                  </Box>
                  <Box p={2}>
                    <Typography>
                      <GoRepoForked />
                      {forks}
                    </Typography>
                    <Typography>
                      <GoStar />
                      {stargazers_count}
                    </Typography>
                  </Box>
                  <Box p={2}>
                    <a href={html_url} target="_blank" rel="noreferrer">
                      <Button color="primary" variant="outlined">
                        Repository
                      </Button>
                    </a>
                  </Box>
                  <Box p={2}>
                    <Link to="/">
                      <Button color="primary" variant="contained">
                        Go Home
                      </Button>
                    </Link>
                  </Box>
                </Box>
              );
            }
            return <div key={item.id}></div>;
          })}
        </Box>
      </Grid>
    </>
  );
};

export default SingleProject;
