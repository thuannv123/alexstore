import React from "react";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Auth/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./Auth/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
