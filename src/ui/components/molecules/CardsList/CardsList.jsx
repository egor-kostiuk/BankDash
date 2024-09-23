import { auth } from '/src/services/api/firebase.js';
import { useCards } from '/src/services/cards/hooks/useCards.js';
import { ToastContainer } from 'react-toastify';

import { ContainerTitle } from '/src/ui/components/atoms/ContainerTitle/ContainerTitle.jsx';
import { Card } from '/src/ui/components/atoms/Card/Card.jsx';

import './CardsList.css';

export const CardsListBox = () => {
  const user = auth.currentUser;
  const cards = useCards(user?.uid);

  return (
    <div className={'cards-list-box'}>
      <ContainerTitle title={'My Cards'}/>
      <div className={'scrollbar-box'}>
        <ul className={'cards-list'}>
          {cards.map(card => (
            <Card
              key={card.id}
              cardType={card.cardType}
              cardBalance={card.cardBalance}
              cardName={card.cardName}
              cardTerm={card.cardTerm}
              cardNumber={card.cardNumber}
              cardBank={card.cardBank}/>
          ))}
        </ul>
      </div>
      <ToastContainer
        position={"top-center"}
        autoClose={2000}
        pauseOnHover={false}
      />
    </div>
  )
}