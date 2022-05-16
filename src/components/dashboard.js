import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="Dashboard">
      <button
        className="NeumorphicButton"
        onClick={() => {
          navigate("/cameraScreen");
        }}
      >
        Take Picture
      </button>
      <button className="NeumorphicButton">Enroll in Class</button>
    </div>
  );
}

export default Dashboard;
