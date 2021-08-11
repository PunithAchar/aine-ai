import React from "react";
import SportsMotorsportsIcon from '@material-ui/icons/SportsMotorsports';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import "../App.css";

const SideBar=()=>{
    return(
        <div className="sidebar">
           <div className="icon ">
            <SportsMotorsportsIcon />
            <p>Icon</p>
            </div>
            <div className="icon ">
            <PermIdentityOutlinedIcon />
            <p>Students</p>
            </div>
            <div className="icon ">
            <MenuBookOutlinedIcon />
            <p>Lesson plans</p>
            </div>
            <div className="icon ">
            <SettingsOutlinedIcon />
            <p>setting</p>
           </div>
        </div>
    )
}

export default SideBar;