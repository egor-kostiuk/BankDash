import { auth } from '/src/services/api/firebase.js';
import { useCards } from '/src/services/cards/hooks/useCards.js';

import { ContainerTitle } from '/src/ui/components/atoms/ContainerTitle/ContainerTitle.jsx';
import { Card } from '/src/ui/components/atoms/Card/Card.jsx';

import './CardsList.css';

export const CardsListBox = () => {
  const user = auth.currentUser;
  const cards = useCards(user?.uid);

  return (
    <div className={'cards-list-box'}>
      <ContainerTitle title={'My Cards'}/>
      <ul className={'cards-list'}>
        {cards.map(card => (
          <Card key={card.id} number={card.cardNumber} balance={card.balance} name={card.cardName} color={'white'}>
          </Card>
        ))}
      </ul>
    </div>
  )
}