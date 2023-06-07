import React from "react";
import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";
// const Home = lazy(() => "./Pages/Home");
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Navbar from "./Components/Layouts/Navbar";
const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar>
        <ReactRoutes>
          {/* <Suspense fallback={<span>Loading...</span>}> */}
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          {/* </Suspense> */}
        </ReactRoutes>
      </Navbar>
    </BrowserRouter>
  );
};

export default Routes;
