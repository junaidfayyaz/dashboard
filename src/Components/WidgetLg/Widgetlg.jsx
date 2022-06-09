
import React from 'react'
import owe from "../Images/ow.jpg"
import "./Widgetlg.css"

// const Button = {{type}} =>{
//   return <button className={"widgetlgbtn + type"}>{type }</button>
// }
  
const Widgetlg = () => {
  return (
    <div className="lg">
      <h3 className="widgetlgtitle">Latest Transection</h3>
      <table className="widgetlgtb">
        <tr className="widgetlgtr">
          <th className="widgetlgth">Customers</th>
          <th className="widgetlgth">Date</th>
          <th className="widgetlgth">Amount</th>
          <th className="widgetlgth">Status</th>
        </tr>
        <tr className="tablrrow">
          <td className="widgetlgtd">
            <img src={owe} alt="owe" className="widgetlgimg" />
            <span className="widgetlgsp">Samsol Carsol</span>
          </td>
          <td className="widgetlgdate">06 06-May 2022</td>
          <td className="widgetlgamount">$176.32</td>
          <td className="widgetlgbutnW">
            {" "}
            <button className="widgetlgbutn" id="approve">Approved</button>{" "}
          </td>
        </tr>
        <tr className="tablrrow">
          <td className="widgetlgtd">
            <img src={owe} alt="owe" className="widgetlgimg" />
            <span className="widgetlgsp">Sunil Sarko</span>
          </td>
          <td className="widgetlgdate">12 04-Aug 2022</td>
          <td className="widgetlgamount">$164.32</td>
          <td className="widgetlgbutnW">
            {" "}
            <button className="widgetlgbutn" id='declin'>Declined</button>{" "}
          </td>
        </tr>
        <tr className="tablrrow">
          <td className="widgetlgtd">
            <img src={owe} alt="owe" className="widgetlgimg" />
            <span className="widgetlgsp">Cristiona Ron</span>
          </td>
          <td className="widgetlgdate">24 11-Jun 2022</td>
          <td className="widgetlgamount">$154.32</td>
          <td className="widgetlgbutnW">
            {" "}
            <button className="widgetlgbutn" id='pend'>Pending</button>{" "}
          </td>
        </tr>
        <tr className="tablrrow">
          <td className="widgetlgtd">
            <img src={owe} alt="owe" className="widgetlgimg" />
            <span className="widgetlgsp">DJ Bravo</span>
          </td>
          <td className="widgetlgdate">18 09-Sep 2022</td>
          <td className="widgetlgamount">$132.32</td>
          <td className="widgetlgbutnW">
            {" "}
            <button className="widgetlgbutn" id="approv">Approved</button>{" "}
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Widgetlg