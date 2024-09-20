import { useState } from 'react';
import { createCard } from '/src/services/cards/createCard.js';
import { auth } from '/src/services/api/firebase.js';

export const CreateCard = () => { // TODO: update card creating  &  rename
  const [balance, setBalance] = useState(0);
  const user = auth.currentUser;

  const handleCreateCard = async () => {
    try {
      const cardId = await createCard(user.uid, balance);
      console.log(cardId); // TODO: toast
    } catch (error) {
      console.error('Error creating card:', error);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={balance}
        onChange={(e) => setBalance(e.target.value)}
        placeholder="Initial balance"
      />
      <button onClick={handleCreateCard}>Create Card</button>
    </div>
  )
}