import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CameraScreen from "./components/cameraScreen";
import Dashboard from "./components/dashboard";
import Navbar from "./components/navbar";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cameraScreen" element={<CameraScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
