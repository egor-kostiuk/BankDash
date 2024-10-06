import { useEffect, useState } from 'react';
import { db } from '/src/services/api/firebase.js';
import { collection, query, where, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

export const useCards = (userId) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (!userId) return;

    const cardsRef = collection(db, 'cards');
    const q = query(cardsRef, where('userId', '==', userId));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedCards = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCards(fetchedCards);
    }, (error) => {
      console.error('Error fetching cards:', error);
    });

    return () => unsubscribe();
  }, [userId]);

  // Function to delete a card from Firestore
  const deleteCard = async (cardId) => {
    try {
      const cardRef = doc(db, 'cards', cardId);
      await deleteDoc(cardRef);
      toast.success('Card successfully deleted');
    } catch (error) {
      toast.error('Error deleting card');
      console.error('Error deleting card:', error);
    }
  };

  return { cards, deleteCard };
}