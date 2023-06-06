import React from "react";
import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Layouts/Navbar";
const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar>
        <ReactRoutes>
          <Route path="/" element={<Home />} />
        </ReactRoutes>
      </Navbar>
    </BrowserRouter>
  );
};

export default Routes;
