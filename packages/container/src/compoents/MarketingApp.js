import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

const MarketingApp = () => {
  useEffect(() => {
    mount(ref.current);
  });
  const ref = useRef();
  return <div ref={ref}></div>;
};

export default MarketingApp;
