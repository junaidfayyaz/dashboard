import React from 'react'
import ow from "../Images/ow.jpg"
import {MdOutlineVisibility} from "react-icons/md"
import "./Widgetsm.css"
const Widgetsm = () => {
  return (
    <div className="sm">
      <span className="widgetsmtitle">New Join Members</span>
      <ul className="widgetsmlist">
        <li className="widgetlistite">
          <img src={ow} alt="ow" className="widgetsmimg" />
          <div className="widgetsmuser">
            <span className="widgetsmusername">Anna Keller</span>
            <span className="widgetsmtitile">Software Engineer</span>
          </div>
          <button className="widgetsmbtn">
            <MdOutlineVisibility className="widgetsmicon"/>
            Display
          </button>
        </li>
        <li className="widgetlistite">
          <img src={ow} alt="ow" className="widgetsmimg" />
          <div className="widgetsmuser">
            <span className="widgetsmusername">Anna Keller</span>
            <span className="widgetsmtitile">Software Engineer</span>
          </div>
          <button className="widgetsmbtn">
            <MdOutlineVisibility className="widgetsmicon"/>
            Display
          </button>
        </li>
        <li className="widgetlistite">
          <img src={ow} alt="ow" className="widgetsmimg" />
          <div className="widgetsmuser">
            <span className="widgetsmusername">Anna Keller</span>
            <span className="widgetsmtitile">Software Engineer</span>
          </div>
          <button className="widgetsmbtn">
            <MdOutlineVisibility className="widgetsmicon"/>
            Display
          </button>
        </li>
        <li className="widgetlistite">
          <img src={ow} alt="ow" className="widgetsmimg" />
          <div className="widgetsmuser">
            <span className="widgetsmusername">Anna Keller</span>
            <span className="widgetsmtitile">Software Engineer</span>
          </div>
          <button className="widgetsmbtn">
            <MdOutlineVisibility className="widgetsmicon"/>
            Display
          </button>
        </li>
        <li className="widgetlistite">
          <img src={ow} alt="ow" className="widgetsmimg" />
          <div className="widgetsmuser">
            <span className="widgetsmusername">Anna Keller</span>
            <span className="widgetsmtitile">Software Engineer</span>
          </div>
          <button className="widgetsmbtn">
            <MdOutlineVisibility className="widgetsmicon"/>
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Widgetsm