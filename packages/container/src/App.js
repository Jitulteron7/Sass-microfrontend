import React, { lazy, Suspense } from "react";
import Header from "./compoents/Header";
const MarketingAppLazyLoad = lazy(() => import("./compoents/MarketingApp"));
const AuthAppLazyLoad = lazy(() => import("./compoents/AuthApp"));
// import AuthApp from "./compoents/AuthApp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Progress from "./compoents/Progress";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});
const App = () => {
  const [isSignIn, setIsSignIn] = React.useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header isSignIn={isSignIn} onSignOut={() => setIsSignIn(false)} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path={"/auth"}>
                <AuthAppLazyLoad onSignIn={() => setIsSignIn(true)} />
              </Route>
              <Route path={"/"} component={MarketingAppLazyLoad} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
