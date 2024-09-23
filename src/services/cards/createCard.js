import { collection, addDoc } from 'firebase/firestore';
import { db } from '/src/services/api/firebase.js';

export const createCard = async (userId, initialBalance = 0, initialType , initialNumber, initialName, initialBank) => {
  const monthTerm = Math.floor(Math.random() * 12 + 1);
  const yearTerm = Math.floor(Math.random() * 6 + 24);

  try {
    const cardData = {
      userId,
      cardBalance: initialBalance,
      cardType: initialType,
      createdAt: new Date(),
      cardNumber: initialNumber,
      cardName: initialName,
      cardBank: initialBank,
      cardTerm: `${monthTerm < 10 ? `0${monthTerm}` : monthTerm}/${yearTerm}`,
    };
    const docRef = await addDoc(collection(db, 'cards'), cardData);
    return docRef.id;
  } catch (e) {
    console.error('Error creating card: ', e);
    throw e;
  }
}