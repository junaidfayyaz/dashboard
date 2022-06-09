import React from 'react'
import "./Topbar.css"
import { MdNotificationsNone } from "react-icons/md"
import { GrLanguage } from "react-icons/gr"
import { FiSettings } from "react-icons/fi"
import own from "../Images/own.jpg"
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-wrap">
        <div className="topbar-left">Junaid</div>
        <div className="topbar-right">
          <div className="icon">
            <MdNotificationsNone />
            <span className="notifi">2</span>
          </div>
          <div className="icon">
            <GrLanguage />
            {/* <span className="notifi">2</span> */}
          </div>
          <div className="icon">
            <FiSettings />
                  </div>
                  <img src={own} alt="own" className="top-img" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;