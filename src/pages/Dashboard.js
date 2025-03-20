import React from "react";
import Header from "../components/Header";
import ColumnChart from "./Recharts";
import { Route, Routes } from "react-router-dom";
import Products from "./Products";

const Dashboard = () => {
  return (
    <div className="main">
      <Header></Header>
      <div className="dashboard-content">
        <Routes>
          <Route path="/" element={<ColumnChart />}></Route>
          <Route path="/Products" element={<Products />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
