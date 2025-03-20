import React from "react";
import Dashboard from "./pages/Dashboard";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
