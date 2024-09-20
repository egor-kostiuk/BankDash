import { useEffect, useState } from 'react';
import { db } from '/src/services/api/firebase.js';
import { collection, query, where, getDocs } from 'firebase/firestore';

export const useCards = (userId) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const cardsRef = collection(db, 'cards');
        const q = query(cardsRef, where('userId', '==', userId));
        const snapshot = await getDocs(q);
        const fetchedCards = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCards(fetchedCards);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    if (userId) {
      fetchCards();
    }
  }, [userId]);

  return cards;
}