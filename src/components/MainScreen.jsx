import React from "react";
import "../App.css";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";

const MainScreen = () => {
  return (
      <div >
      <div className="top"></div>
    <div className="mainscreen">
      <div className="videos">
        <ArrowLeftIcon />
        <span>videos</span>
      </div>
      <div className="inputinfo">
        <div classname="info">
          <input className="url" placeholder="Inser URL here.." />
          <p>or</p>
          <input className="upload" placeholder="upload" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default MainScreen;
