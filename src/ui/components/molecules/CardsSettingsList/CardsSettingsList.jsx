import { auth } from '/src/services/api/firebase.js';
import { useCards } from '/src/services/cards/hooks/useCards.js';

import { ContainerTitle } from '/src/ui/components/atoms/ContainerTitle/ContainerTitle.jsx';
import { CardSettingsBox } from '/src/ui/components/atoms/CardSettingsBox/CardSettingsBox.jsx';

import './CardsSettingsList.css';

export const CardsSettingsList = () => {
  const user = auth.currentUser;
  const cards = useCards(user?.uid);

  return (
    <div style={{flexGrow: 1}}>
      <ContainerTitle title={'Card List'}/>
      <ul className={'cards-settings-list'}>
        {cards.map(card => (
          <CardSettingsBox
            key={card.id}
            cardType={card.cardType}
            cardBank={card.cardBank}
            cardName={card.cardName}
            cardNumber={card.cardNumber}
            cardStatus={card.cardStatus}/>
        ))}
      </ul>
    </div>
  )
}