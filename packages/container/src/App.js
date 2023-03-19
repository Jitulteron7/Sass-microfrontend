import React, { lazy, Suspense, useEffect } from "react";
import Header from "./compoents/Header";
const MarketingAppLazyLoad = lazy(() => import("./compoents/MarketingApp"));
const AuthAppLazyLoad = lazy(() => import("./compoents/AuthApp"));
const DashboardApp = lazy(() => import("./compoents/DashboardApp"));
const AboutApp = lazy(() => import("./compoents/AboutApp"));
import { createBrowserHistory } from "history";
import { Router, Redirect, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Progress from "./compoents/Progress";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory();

const App = () => {
  const [isSignIn, setIsSignIn] = React.useState(false);
  React.useEffect(() => {
    if (isSignIn) {
      history.push("/dashboard");
    }
  }, [isSignIn]);
  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header isSignIn={isSignIn} onSignOut={() => setIsSignIn(false)} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path={"/auth"}>
                <AuthAppLazyLoad onSignIn={() => setIsSignIn(true)} />
              </Route>
              <Route path={"/dashboard"}>
                {!isSignIn && <Redirect to={"/"} />}
                <DashboardApp />
              </Route>
              <Route path={"/about"}>
                <AboutApp />
              </Route>
              <Route exact path={"/"} component={MarketingAppLazyLoad} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};

export default App;
