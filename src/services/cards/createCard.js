import { collection, addDoc } from 'firebase/firestore';
import { db } from '/src/services/api/firebase.js';

export const createCard = async (userId, initialBalance = 0, initialType , initialNumber, initialName) => {
  try {
    const cardData = {
      userId,
      balance: initialBalance,
      cardType: initialType,
      createdAt: new Date(),
      cardNumber: initialNumber,
      cardName: initialName,
    };
    const docRef = await addDoc(collection(db, 'cards'), cardData);
    return docRef.id;
  } catch (e) {
    console.error('Error creating card: ', e);
    throw e;
  }
}