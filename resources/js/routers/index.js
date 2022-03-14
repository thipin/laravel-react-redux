import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

import Home from "../components/Home";

const Routing = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
    </Router>
  );
};

export default Routing;
