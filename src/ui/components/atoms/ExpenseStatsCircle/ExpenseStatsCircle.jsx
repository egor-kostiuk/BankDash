import { useCalcSize } from '/src/hooks/useCalcSize.js';
import { banksUsingStatsList } from '/src/helpers/banksUsingStatsList.js';

import './ExpenseStatsCircle.css';

export const ExpenseStatsCircle = () => {
  return (
    <div className={'expense-stats-circle'}>
      <div className='section section-1' style={useCalcSize(banksUsingStatsList.DBL)}></div>
      <div className='section section-2' style={useCalcSize(banksUsingStatsList.AMB)}></div>
      <div className='center'></div>
      <div className='section section-3' style={useCalcSize(banksUsingStatsList.BRC)}></div>
      <div className='section section-4' style={useCalcSize(banksUsingStatsList.MCP)}></div>
    </div>
  )
}