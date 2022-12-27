import { mount } from "auth/AuthApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default ({ onSignIn }) => {
  const ref = useRef();
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: (location) => {
        const { pathname: nexPathname } = location;
        if (history.location.pathname != nexPathname) {
          history.push(nexPathname);
        }
      },
      onSignIn,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
