import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./config/configStore";

import Home from "./components/Home";
import MemberList from "./components/MemberList";
import Edit from "./components/Edit";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="container mb-5">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/memberList" component={MemberList} />
                <Route exact path="/edit" component={Edit} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
