import { CardExpenseStatsBox } from '/src/ui/components/molecules/CardExpenseStatsBox/CardExpenseStatsBox.jsx';

import { NewCardBox } from '/src/ui/components/molecules/NewCardBox/NewCardBox.jsx';
import { CardsListBox } from '/src/ui/components/molecules/CardsList/CardsList.jsx';
import { CardsSettingsList } from '/src/ui/components/molecules/CardsSettingsList/CardsSettingsList.jsx';

export const CardsContent = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 50}}> {/* TODO: delete div */}
      <CardsListBox/>
      <div style={{display: 'flex', gap: 30}}>
        <CardExpenseStatsBox/>
        <CardsSettingsList/>
      </div>
      <NewCardBox/>
    </div>
  )
}