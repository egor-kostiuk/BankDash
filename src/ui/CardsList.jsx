import { auth } from '/src/services/api/firebase.js';
import { CreateCard } from '/src/ui/CreateCard';
import { useCards } from '/src/services/cards/hooks/useCards.js';

export const CardList = () => {
  const user = auth.currentUser;
  const cards = useCards(user?.uid);

  return (
    <div>
      <h2>Your Cards</h2>
      <CreateCard />
      <ul>
        {cards.map(card => (
          <li key={card.id}>
            Card Number: {card.cardNumber}, Balance: {card.balance}
          </li>
        ))}
      </ul>
    </div>
  )
}