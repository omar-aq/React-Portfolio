import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Components
import Home from "./components/Home";
import SingleProject from "./components/SingleProject";
import Error from "./components/Error";
// import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
// import { Paper } from "@material-ui/core";
// const theme = createMuiTheme({
//   palette: {
//     type: "dark",
//   },
// });

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/project/:id">
          <SingleProject />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
