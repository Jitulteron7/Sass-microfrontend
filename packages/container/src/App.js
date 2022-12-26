import React from "react";
import Header from "./compoents/Header";
import MarketingApp from "./compoents/MarketingApp";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};

export default App;
