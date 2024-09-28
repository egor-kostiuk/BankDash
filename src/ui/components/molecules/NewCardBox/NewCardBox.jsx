import { useState } from 'react';
import { auth } from '/src/services/api/firebase.js';
import { createCard } from '/src/services/cards/createCard.js';
import { toast, ToastContainer } from 'react-toastify';

import { ContainerTitle } from '/src/ui/components/atoms/ContainerTitle/ContainerTitle.jsx';
import { SettingsSelectInputBox } from '../SettingsSelectInputBox/SettingsSelectInputBox.jsx';
import { SettingsInputBox } from '../SettingsInputBox/SettingsInputBox.jsx';
import { SettingsSaveButton } from '../../atoms/Buttons/SettingsSaveButton/SettingsSaveButton.jsx';

import { typesData } from '/src/hooks/JsonDataHelper.js';
import { banksData } from '/src/hooks/JsonDataHelper.js';

import './NewCardBox.css';

import {useCards} from "../../../../services/cards/hooks/useCards.js";

export const NewCardBox = () => {
  const user = auth.currentUser;
  const { cards } = useCards(user?.uid);
  const types = typesData().getData();
  const banks = banksData().getData();
  const [cardNumber, setCardNumber] = useState('');
  const [cardType, setCardType] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardBank, setCardBank] = useState('');
  let cardBalance = 0;

  const handleCreateCard = async () => { // TODO: create separate function
    if (!cardType) {
      toast.warning('Select card type');
      return;
    }

    switch (cardType) {
      case 'Classic':
        cardBalance = 10;
        break;
      case 'Credit':
        cardBalance = 0;
        break;
      case 'Gold':
        cardBalance = 1000;
        break;
      case 'Platinum':
        cardBalance = 10000;
        break;
    }

    if (!cardBank) {
      toast.warning('Select bank');
      return;
    }

    if (!cardName) {
      toast.warning('Enter your name');
      return;
    }

    if (!/^\d{16}$/.test(cardNumber)) {
      toast.warning('Card number must have 16 digits');
      return;
    }

    if (cardNumber === '0000000000000000') {
      toast.warning(`Card number cannot be 0000`);
      return;
    }

    const cardExists = cards.some(card => card.cardNumber === cardNumber);
    if (cardExists) {
      toast.warning('Card with this number already exists');
      return;
    }

    try {
      const cardId = await createCard(user.uid, 'Active', '0000', cardBalance, cardType, cardNumber, cardName, cardBank);
      toast.success('Card successfully added');
      console.log(cardId);
    } catch (error) {
      toast.error('Error adding card');
      console.error('Error adding card:', error);
    }
  };

  return (
    <div className={'new-card-box'}>
      <ContainerTitle title={'Add New Card'}/>
      <div className={'new-card-container container'}>
        <p className={'new-card-container-title'}>
          Credit Card generally means a plastic card issued by
          Scheduled Commercial Banks assigned to a Cardholder,
          with a credit limit, that can be used to purchase
          goods and services on credit or obtain cash advances.
        </p>
        <div className={'inputs-container'}>
          <SettingsSelectInputBox
            style={{width: 320}}
            list={types}
            title={'Card Type'}
            placeholder={'Select Card Type'}
            onChange={(e) => setCardType(e ? e.label : '')}/>
          <SettingsSelectInputBox
            style={{width: 320}}
            list={banks}
            title={'Bank'}
            placeholder={'Select Bank'}
            onChange={(e) => setCardBank(e ? e.label : '')}/>
          <SettingsInputBox
            style={{width: 320}}
            title={'Name On Card'}
            placeholder={'Your name'}
            onChange={(e) => setCardName(e.target.value)}
            maxLength={12}/>
          <SettingsInputBox
            style={{width: 320}}
            title={'Card Number'}
            placeholder={'**** **** **** ****'}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength={16}
          />
        </div>
        <SettingsSaveButton label={'Add Card'} onClick={handleCreateCard}/> {/* TODO: rename or create new button */}
      </div>
      <ToastContainer
        style={{top: '50px'}}
        position={"top-center"}
        autoClose={2000}
        pauseOnHover={false}
      />
    </div>
  )
}