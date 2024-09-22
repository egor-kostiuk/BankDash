import { CardExpenseStatsBox } from '/src/ui/components/molecules/CardExpenseStatsBox/CardExpenseStatsBox.jsx';

import { NewCardBox } from '/src/ui/components/molecules/NewCardBox/NewCardBox.jsx';
import { CardsListBox } from '/src/ui/components/molecules/CardsList/CardsList.jsx';

export const CardsContent = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 50}}> {/* TODO: delete div */}
      <CardsListBox/>
      <CardExpenseStatsBox/>
      <NewCardBox/>
    </div>
  )
}