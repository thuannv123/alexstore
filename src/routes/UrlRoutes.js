import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "../page/Auth/SignIn";
import SignUp from "../page/Auth/SignUp";
import Dashboard from "../page/Dashboard/Dashboard";

const UrlRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default UrlRoutes;
