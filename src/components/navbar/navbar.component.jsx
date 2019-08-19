import React from "react";
import { Toolbar, AppBar, Button } from "@material-ui/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Dashboard } from "../dashboard/dashboard.component";
import CardListComponent from "../card-list/card-list-component";

const classvariant = {
  margin: "0px 20px"
};

export const NavBar = () => {
  return (
    <Router>
      <div>
        <AppBar color="secondary">
          <Toolbar>
            <Link to="/card">
              <Button style={classvariant} variant="contained" color="primary">
                card
              </Button>
            </Link>

            <Link to="/dashboard">
              <Button style={classvariant} variant="contained" color="primary">
                dashboard
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>

      <Route path="/card" component={CardListComponent} />
      <Route path="/dashboard/" component={Dashboard} />
    </Router>
  );
};
