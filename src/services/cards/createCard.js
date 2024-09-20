import { collection, addDoc } from 'firebase/firestore';
import { db } from '/src/services/api/firebase.js';

export const createCard = async (userId, initialBalance = 0) => { // TODO: update card creating
  try {
    const cardData = {
      userId,
      balance: initialBalance,
      createdAt: new Date(),
      cardNumber: Math.floor(Math.random() * 10000000000),
    };
    const docRef = await addDoc(collection(db, 'cards'), cardData);
    return docRef.id;
  } catch (e) {
    console.error('Error creating card: ', e);
    throw e;
  }
}