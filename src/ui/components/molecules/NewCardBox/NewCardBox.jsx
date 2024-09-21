import { useState } from 'react';
import { auth } from '/src/services/api/firebase.js';
import { createCard } from '/src/services/cards/createCard.js';

import { ContainerTitle } from '/src/ui/components/atoms/ContainerTitle/ContainerTitle.jsx';
import { SettingsSelectInputBox } from '../SettingsSelectInputBox/SettingsSelectInputBox.jsx';
import { SettingsInputBox } from '../SettingsInputBox/SettingsInputBox.jsx';
import { SettingsSaveButton } from '../../atoms/Buttons/SettingsSaveButton/SettingsSaveButton.jsx';
import { typesData } from '/src/hooks/JsonDataHelper.js';

import './NewCardBox.css';

export const NewCardBox = () => {
  const user = auth.currentUser;
  const types = typesData().getData();
  const [cardNumber, setCardNumber] = useState('');
  const [cardType, setCardType] = useState('');
  let balance = 0;

  const handleCreateCard = async () => {
    if (!cardType) {
      alert('Select card type'); // TODO: toast
      return;
    }

    switch (cardType) {
      case 'Classic':
        balance = 10;
        break;
      case 'Credit':
        balance = 0;
        break;
      case 'Gold':
        balance = 1000;
        break;
      case 'Platinum':
        balance = 10000;
        break;
    }

    if (cardNumber.length !== 16) {
      alert('Card number must be exactly 16 digits.'); // TODO: toast
      return;
    }

    try {
      const cardId = await createCard(user.uid, balance, cardType, cardNumber);
      console.log(cardId); // TODO: toast
    } catch (error) {
      console.error('Error creating card:', error);
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
          <SettingsSelectInputBox style={{width: 320}} list={types} title={'Card Type'} placeholder={'Select Card Type'} onChange={(e) => setCardType(e ? e.label : '')}/>
          <SettingsInputBox style={{width: 320}} title={'Name On Card'} placeholder={'Your name'} maxLength={18}/>
          <SettingsInputBox
            style={{width: 320}}
            title={'Card Number'}
            placeholder={'**** **** **** ****'}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength={16}
          />
          <SettingsInputBox style={{width: 320}} title={'Expiration Date'} placeholder={'00/00'}/>
        </div>
        <SettingsSaveButton label={'Add Card'} onClick={handleCreateCard}/> {/* TODO: rename or create new button */}
      </div>
    </div>
  )
}