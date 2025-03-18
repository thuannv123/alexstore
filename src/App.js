import React from "react";
// import UrlRoutes from "./routes/UrlRoutes";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <UrlRoutes></UrlRoutes> */}
      <Router>
        <Routes>
          <Route path="/*" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
