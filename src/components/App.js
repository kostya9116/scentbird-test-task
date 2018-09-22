import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Subscription from "../containers/SubscriptionContainer";
import Header from "./header";
import ErrorPage404 from "./error_pages/404_error_page";

export default class App extends Component {

  render() {
    return (
      <div id="appContainer" className="appContainer">
        <Header/>
        <div className="pageContainer position-relative">
          <main>
            <Switch>
              <Route exact path="/" component={Subscription}/>
              <Route path="/404" component={ErrorPage404}/>
              <Redirect from='*' to='/404'/>
            </Switch>
          </main>
        </div>
      </div>
    )
  }
}
