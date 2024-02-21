import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import { Routes } from "./routing/routes.ts";
import Home from "./components/Home.js";
import Trips from "./components/Trips.js";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path={`${Routes.Home}`}>
            <Home />
          </Route>
          <Route exact path={`${Routes.Trips}`}>
            <Trips />
          </Route>
        </Switch>
      </Router>
      {/* You can add a Footer component in a similar way */}
    </div>
  );
}

export default App;
