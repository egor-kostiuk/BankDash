import { CardsListBox } from '/src/ui/components/molecules/CardsList/CardsList.jsx';
import { CardExpenseStatsBox } from '/src/ui/components/molecules/CardExpenseStatsBox/CardExpenseStatsBox.jsx';
import { CardsInfoList } from '/src/ui/components/molecules/CardsInfoList/CardsInfoList.jsx';
import { NewCardBox } from '/src/ui/components/molecules/NewCardBox/NewCardBox.jsx';
import { CardSettingsBox } from '/src/ui/components/molecules/CardSettingsBox/CardSettingsBox.jsx';

import { useCards } from '/src/services/cards/hooks/useCards.js';
import { auth } from '/src/services/api/firebase.js';

export const CardsContent = () => {
  const user = auth.currentUser;
  const { cards } = useCards(user?.uid);

  if (cards.length === 0) {
    return <NewCardBox/>
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 50}}> {/* TODO: delete div */}
      <CardsListBox/>
      <div style={{display: 'flex', gap: 30}}>
        <CardExpenseStatsBox/>
        <CardsInfoList/>
      </div>
      <div style={{display: 'flex', gap: 30}}>
        <NewCardBox/>
        <CardSettingsBox/>
      </div>
    </div>
  )
}