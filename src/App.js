import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";

export default function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">Colin Richards ;) React Crud Operations</h2>
        <Switch>
          <Route exact path="/" component={Read} />
          <Route exact path="/read" component={Read} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/update" component={Update} />
        </Switch>
      </div>
    </Router>
  );
}
