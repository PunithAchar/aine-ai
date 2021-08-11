import React from "react";
import './App.css';
import SideBar from "../src/components/SideBar"
import MainScreen from "./components/MainScreen";

const App=() =>{
  return(
    <div className="app">
     <div className="side"><SideBar /></div>
    <div className="main"><MainScreen /></div>
    </div>
  )
}

export default App
