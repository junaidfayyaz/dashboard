import React from 'react'
import "./Featured.css"
import { AiOutlineArrowDown } from 'react-icons/ai'
import {AiOutlineArrowUp} from "react-icons/ai"
const Featured = () => {
  return (
    <div className="featured">
      <div className="featureditem">
        <span className="featuredtitle">Revanue</span>
        <div className="featuremoneycontainer">
          <span className="featuremoney">$2,415</span>
          <span className="featuredmoneyrate">
            -11.4 <AiOutlineArrowDown className="featureicon" />
          </span>
        </div>
        <span className="featuresub">As Compared to last month</span>
      </div>

      <div className="featureditem">
        <span className="featuredtitle">Sales</span>
        <div className="featuremoneycontainer">
          <span className="featuremoney">$4,415</span>
          <span className="featuredmoneyrate">
            -116.4 <AiOutlineArrowDown className="featureicon" />
          </span>
        </div>
        <span className="featuresub">As Compared to last month</span>
      </div>

      <div className="featureditem">
        <span className="featuredtitle">Cost</span>
        <div className="featuremoneycontainer">
          <span className="featuremoney">$2,15</span>
          <span className="featuredmoneyrate">
            +15.47 <AiOutlineArrowUp className="featureicons" />
          </span>
        </div>
        <span className="featuresub">As Compared to last month</span>
      </div>
    </div>
  );
}

export default Featured