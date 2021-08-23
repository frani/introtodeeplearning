import React from "react";
import {
  BrowserRouter as Router,
  Switch as Routes,
  Route,
} from "react-router-dom";

import { routes } from "./constants/routes";

import "./assets/style/main.scss";

const App = () => {
  return (
    <Router basename="/">
      <Routes>
        {routes.map((r) => {
          return (
            <Route
              path={r.path}
              component={(props) => r.component(props)}
              exact={r.exact}
              key={r.name}
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default App;
