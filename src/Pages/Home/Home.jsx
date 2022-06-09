import React from 'react'
import Chart from '../../Components/Chart/Chart'
import Featured from '../../Components/Featuredinfo/Featured'
import Widgetlg from '../../Components/WidgetLg/Widgetlg'
import Widgetsm from '../../Components/WidgetSm/Widgetsm'
import "./Home.css"

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <Chart/>
      <div className='smlg'>
        <Widgetsm />
        <Widgetlg/>
      </div>
    </div>
  )
}

export default Home