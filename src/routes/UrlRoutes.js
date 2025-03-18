import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "../page/Auth/SignIn";
import SignUp from "../Auth/SignUp";
import Dashboard from "../pages/Dashboard";
import ProducStatistics from "../components/ProducStatistics";

const UrlRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/ProducStatistics" element={<ProducStatistics />} />
        </Routes>
      </Router>
    </div>
  );
};

export default UrlRoutes;
