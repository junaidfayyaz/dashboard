import React from 'react'
import "./Sidebar.css"
import { MdLineStyle } from "react-icons/md"
import { SiSimpleanalytics } from "react-icons/si";
import { FiTrendingUp } from "react-icons/fi"
import { TbUsers } from "react-icons/tb"
import { MdOutlineProductionQuantityLimits } from "react-icons/md"
import { BiDollar } from "react-icons/bi"
import { SiGoogleanalytics } from "react-icons/si"
import { MdEmail } from "react-icons/md";
import { RiFeedbackLine } from "react-icons/ri"
import { FiMessageSquare } from "react-icons/fi"
import { GrUserManager } from "react-icons/gr"
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarwraper">
        <div className="sidemenu">
          <h3 className="sidebartitle">Dashboard</h3>
          <ul className="sidebarlist">
            <li className="sidebaritem">
              <MdLineStyle className="sideicon" />
              <Link className="dropdown-item" to="/">
                Home
              </Link>
            </li>
            <li className="sidebaritem">
              <SiSimpleanalytics className="sideicon" />
              Analytics
            </li>
            <li className="sidebaritem">
              <FiTrendingUp className="sideicon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidemenu">
          <h3 className="sidebartitle">Quick Menu</h3>
          <ul className="sidebarlist">
            <li className="sidebaritem">
              <TbUsers className="sideicon" />

              <Link className="dropdown-item" to="/use">
                User
              </Link>
            </li>
            <li className="sidebaritem">
              <MdOutlineProductionQuantityLimits className="sideicon" />
              Products
            </li>
            <li className="sidebaritem">
              <BiDollar className="sideicon" />
              Transections
            </li>
            <li className="sidebaritem">
              <SiGoogleanalytics className="sideicon" />
              Reports
            </li>
          </ul>
        </div>

        <div className="sidemenu">
          <h3 className="sidebartitle">Notifications</h3>
          <ul className="sidebarlist">
            <li className="sidebaritem">
              <MdEmail className="sideicon" />
              Mail
            </li>
            <li className="sidebaritem">
              <RiFeedbackLine className="sideicon" />
              Feedback
            </li>
            <li className="sidebaritem">
              <FiMessageSquare className="sideicon" />
              Messages
            </li>
          </ul>
        </div>

        <div className="sidemenu">
          <h3 className="sidebartitle">Staff</h3>
          <ul className="sidebarlist">
            <li className="sidebaritem">
              <GrUserManager className="sideicon" />
              Manage
            </li>
            <li className="sidebaritem">
              <SiSimpleanalytics className="sideicon" />
              Analytics
            </li>
            <li className="sidebaritem">
              <SiGoogleanalytics className="sideicon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar