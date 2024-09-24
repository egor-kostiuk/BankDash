import { banksList } from '/src/helpers/banksList.js';

import './ExpenseStatsBanks.css';

export const ExpenseStatsBanks = () => {
  return (
    <div className={'expense-stats-banks'}>
      {banksList.map((bank, index) => (
        <div key={index}>
          <div style={{backgroundColor: 'transparent'}} className={`expense-stats-banks-circle ${bank.name}`}><span></span></div>
          {bank.name}
        </div>
      ))}
    </div>
  )
}