import React, { Component } from "react";
import "./App.css";
import "./css/style.css";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import PageNotFound from "./app/components/404/PageNotFound";
import Layout from "./app/components/Layout/Layout";
import CardLayout from "./app/components/Card/CardLayout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={CardLayout} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
