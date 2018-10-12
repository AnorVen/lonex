import React, { Component } from "react";
import "./App.css";
import "./css/style.css";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import PageNotFound from "./app/components/404/PageNotFound";
import Layout from "./app/components/Layout/Layout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/card" component={PageNotFound} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
