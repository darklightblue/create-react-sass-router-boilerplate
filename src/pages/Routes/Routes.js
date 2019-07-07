import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import Test from "pages/Test/Test";

const history = createBrowserHistory();

const renderRoutePage = props => <Test {...props} />;

export default function Routes() {
  return (
    <div>
      <Router history={history}>
        <Route exact path="*" render={renderRoutePage} />
      </Router>
    </div>
  );
}
