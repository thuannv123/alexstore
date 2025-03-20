import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "../Auth/SignUp";
import Dashboard from "../pages/Dashboard";
import ProducStatistics from "../components/ProducStatistics";

const UrlRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/ProducStatistics" element={<ProducStatistics />} />
        </Routes>
      </Router>
    </div>
  );
};

export default UrlRoutes;
