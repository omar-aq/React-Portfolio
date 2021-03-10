import React, { useState, useEffect } from "react";
import Projects from "./Projects";
//material ui
import { Grid, Box, Typography } from "@material-ui/core";

const url = "https://api.github.com/users/omar-aq/repos";

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setRepos(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box id="projects">
      <Typography align="center" variant="h4" color="textSecondary">
        Projects
      </Typography>
      <Box m={5}>
        <Grid container justify="center" style={{ width: "100%" }}>
          {repos.map((item) => {
            return (
              <Grid xs={12} sm={8} md={5} lg={3} item key={item.id}>
                <Projects {...item} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};
export default Repos;
