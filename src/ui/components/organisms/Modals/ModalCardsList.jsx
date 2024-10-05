import { auth } from '/src/services/api/firebase.js';
import { useCards } from '/src/services/cards/hooks/useCards.js';

import { ModalCardBox } from '/src/ui/components/molecules/ModalCardBox/ModalCardBox.jsx';

export const ModalCardsList = ({ status }) => {
  const user = auth.currentUser;
  const { cards } = useCards(user?.uid);

  return (
    <div style={{display: 'flex', gap: 35, flexWrap: 'wrap'}}>
      {cards.map(card => (
        card.cardStatus === status ? (
          <ModalCardBox
          key={card.id}
          cardId={card.id}
          cardStatus={card.cardStatus}
          cardBank={card.cardBank}
          cardType={card.cardType}
          cardBalance={card.cardBalance}
          cardNumber={card.cardNumber}/>
        ) : null
      ))}
    </div>
  )
}