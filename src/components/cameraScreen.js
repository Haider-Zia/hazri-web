import React, { useEffect } from "react";
import camera from "../modules/camera";

function CameraScreen() {
  useEffect(() => {
    camera.startCamera();
  }, []);
  return (
    <button
      onClick={() => {
        camera.takeSnapshot();
      }}
    >
      Take Picture
    </button>
  );
}

export default CameraScreen;
