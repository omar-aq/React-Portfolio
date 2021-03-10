import React from "react";
import emailjs from "emailjs-com";
//material ui
import {
  Grid,
  TextField,
  Box,
  TextareaAutosize,
  Typography,
  Button,
} from "@material-ui/core";

import Pic from "../icons/form.svg";

const Form = () => {
  const [email, setEmail] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const changeHandle = (e) => {
    setIsError(false);
    setEmail(e.target.value);
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  const submitHandle = (e) => {
    if (isError) {
      e.preventDefault();
    } else {
      e.preventDefault();
      emailjs
        .sendForm(
          "gmail",
          "template_uff8hjq",
          e.target,
          "user_eV1HsDiDiAbHl1CQ5NpPQ"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      e.target.reset();
    }
  };

  return (
    <Box m={1} id="form" style={{ width: "90%" }}>
      <Box mb={3}>
        <Typography variant="h3" color="textSecondary">
          Contact
        </Typography>
      </Box>
      <form onSubmit={submitHandle}>
        <Grid container justify="center">
          <Grid item xs={12} sm={5}>
            <Grid
              container
              style={{ width: "100%" }}
              direction="column"
              spacing={3}
            >
              <Grid item xs={12} sm={12}>
                <TextField
                  style={{ width: "100%" }}
                  color="primary"
                  autoComplete="Subject"
                  name="Subject"
                  variant="outlined"
                  id="Subject"
                  label=" Subject"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  style={{ width: "100%" }}
                  color="primary"
                  autoComplete="Name"
                  name="Name"
                  variant="outlined"
                  required
                  id="Name"
                  label=" Name"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  value={email}
                  onChange={(e) => changeHandle(e)}
                  error={isError}
                  helperText={isError && "invalid email address."}
                  style={{ width: "100%" }}
                  color="primary"
                  autoComplete="Email"
                  name="Email"
                  variant="outlined"
                  required
                  id="Email"
                  label=" Email"
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextareaAutosize
                  name="Message"
                  style={{ width: "100%" }}
                  aria-label="textarea"
                  autoComplete="Email"
                  rowsMin={6}
                  placeholder="Message"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Button type="submit" color="primary" variant="contained">
                  Send
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img width="80%" src={Pic} alt="form-pic" />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Form;
