import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact component={Home} path="/" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
