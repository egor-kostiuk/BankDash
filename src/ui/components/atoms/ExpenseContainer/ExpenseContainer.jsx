import { useCalcSize } from '/src/hooks/useCalcSize.js';
import { banksList } from '/src/helpers/banksList.js';
import { banksUsingStatsList } from '/src/helpers/banksUsingStatsList.js';

import './ExpenseContainer.css';

export const ExpenseContainer = () => {
  return (
    <div className={'expense-container container'}>
      <div className={'expense-stats-circle'}>
        <div className='section section-1' style={useCalcSize(banksUsingStatsList.DBL)}></div>
        <div className='section section-2' style={useCalcSize(banksUsingStatsList.AMB)}></div>
        <div className='circle'></div>
        <div className='section section-3' style={useCalcSize(banksUsingStatsList.BRC)}></div>
        <div className='section section-4' style={useCalcSize(banksUsingStatsList.MCP)}></div>
      </div>

      <div className={'expense-container-banks'}>
        {banksList.map((bank, index) => (
          <span key={index}>
            <div className={'bank-circle'} style={{ backgroundColor: bank.color }}></div>
            {bank.name}
          </span>
        ))}
      </div>
    </div>
  )
}