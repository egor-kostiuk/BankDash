import { ContainerTitle } from '/src/ui/components/atoms/ContainerTitle/ContainerTitle.jsx';
import { ExpenseContainer } from '/src/ui/components/atoms/ExpenseContainer/ExpenseContainer.jsx';

import './CardExpenseStatsBox.css';

export const CardExpenseStatsBox = () => {
  return (
    <div className={'card-expense-stats-box'}>
      <ContainerTitle title={'Card Expense Statistics'}/>
      <ExpenseContainer/>
    </div>
  )
}