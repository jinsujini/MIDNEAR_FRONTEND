import React from 'react'
import DayGraph from './DayGraph'
import WeekGraph from './WeekGraph'
import MonthGraph from './MonthGraph'

const Graph = () => {
  return (
    <div className='graph '>
      <DayGraph />
      <WeekGraph />
      <MonthGraph />
    </div>
  )
}

export default Graph
