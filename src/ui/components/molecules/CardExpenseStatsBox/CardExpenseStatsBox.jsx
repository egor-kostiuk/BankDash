import { ContainerTitle } from '/src/ui/components/atoms/ContainerTitle/ContainerTitle.jsx';
import { ExpenseStatsCircle } from '/src/ui/components/atoms/ExpenseStatsCircle/ExpenseStatsCircle.jsx';
import { ExpenseStatsBanks } from '/src/ui/components/atoms/ExpenseStatsBanks/ExpenseStatsBanks.jsx';

import './CardExpenseStatsBox.css';

export const CardExpenseStatsBox = () => {
  return (
    <div className={'card-expense-stats-box'}>
      <ContainerTitle title={'Card Expense Statistics'}/>
      <div className={'expense-container container'}>
        <ExpenseStatsCircle/>
        <ExpenseStatsBanks/>
      </div>
    </div>
  )
}