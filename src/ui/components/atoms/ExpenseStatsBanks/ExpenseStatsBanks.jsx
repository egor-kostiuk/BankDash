import { banksList } from '/src/helpers/banksList.js';

import './ExpenseStatsBanks.css';

export const ExpenseStatsBanks = () => {
  return (
    <div className={'expense-stats-banks'}>
      {banksList.map((bank, index) => (
        <span key={index}>
          <div className={'expense-stats-banks-circle'} style={{backgroundColor: bank.color}}></div>
          {bank.name}
        </span>
      ))}
    </div>
  )
}