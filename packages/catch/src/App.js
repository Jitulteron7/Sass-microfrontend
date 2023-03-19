import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Landing from "./components/Landing";

const generateClassName = createGenerateClassName({
  productionPrefix: "ca",
});
export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/catch" component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
