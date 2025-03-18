import React from "react";
import Header from "../components/Header";
import ColumnChart from "../components/Recharts";
import { Route, Routes } from "react-router-dom";
import ProducStatistics from "../components/ProducStatistics";

const Dashboard = () => {
  return (
    <div>
      <Header></Header>
      <div className="dashboard-content">
        <Routes>
          <Route path="/" element={<ColumnChart />}></Route>
          <Route
            path="/ProducStatistics"
            element={<ProducStatistics />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
