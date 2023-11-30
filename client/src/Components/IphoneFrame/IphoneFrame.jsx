import React from "react";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import "./IphoneFrame.css";
import Header from "../Header/Header";

const IphoneFrame = () => {
  return (
    <DeviceFrameset device="iPhone X" color="black">
      <div className="container">
        <Header />
      </div>
    </DeviceFrameset>
  );
};

export default IphoneFrame;
