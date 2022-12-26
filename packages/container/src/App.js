import React from "react";
import Header from "./compoents/Header";
import MarketingApp from "./compoents/MarketingApp";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

const generateClassname = createGenerateClassName({
  productionPrefix: "co",
});
const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassname}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
