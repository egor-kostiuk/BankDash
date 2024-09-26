import { collection, addDoc } from 'firebase/firestore';
import { db } from '/src/services/api/firebase.js';

export const createCard = async (userId, initialStatus, initialPin, initialBalance, initialType, initialNumber, initialName, initialBank) => {
  const monthTerm = Math.floor(Math.random() * 12 + 1);
  const yearTerm = Math.floor(Math.random() * 6 + 24);

  try {
    const cardData = {
      userId,
      cardStatus: initialStatus,
      cardPin: initialPin,
      cardBalance: initialBalance,
      cardType: initialType,
      cardNumber: initialNumber,
      cardName: initialName,
      cardBank: initialBank,
      cardTerm: `${monthTerm < 10 ? `0${monthTerm}` : monthTerm}/${yearTerm}`,
      createdAt: new Date(),
    };
    const docRef = await addDoc(collection(db, 'cards'), cardData);
    return docRef.id;
  } catch (e) {
    console.error('Error creating card: ', e);
    throw e;
  }
}