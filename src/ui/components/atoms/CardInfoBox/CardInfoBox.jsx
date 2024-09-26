import { useCards } from '/src/services/cards/hooks/useCards.js';
import Swal from 'sweetalert2';

import { CardInfoBoxIcon } from '/src/assets/img/card/CardInfoBoxIcon.jsx';

import './CardInfoBox.css';

export const CardInfoBox = ({ cardId, cardType, cardBank, cardName, cardNumber, cardStatus }) => {
  const { deleteCard } = useCards();

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure you want to delete the card?',
      text: 'This action cannot be undone!',
      showCancelButton: true,
      backdrop: `rgba(0,0,0,0.75)`,
      customClass: {
        popup: 'custom-swal-popup',
        title: 'custom-swal-title',
        htmlContainer: 'custom-swal-text',
        confirmButton: 'custom-swal-confirm-button',
        cancelButton: 'custom-swal-cancel-button',
      },
      confirmButtonText: 'Yes, delete!',
      cancelButtonText: 'No, cancel!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCard(cardId);
      } else {
        console.log('canceled');
      }
    });
  };

  return (
    <div className={'card-info-box'}>
      <div className={`card-info-img ${cardBank}`}>
        <CardInfoBoxIcon className={cardBank}/>
      </div>
      <div className={'card-info-content'}>
        <span>Bank</span>
        <span style={{background: 'transparent'}} className={cardBank}>{cardBank} Bank</span>
      </div>
      <div className={'card-info-content'}>
        <span>Card Type</span>
        <span style={{WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent'}} className={cardType}>{cardType}</span>
      </div>
      <div className={'card-info-content'}>
        <span>Card Number</span>
        <span>**** **** {cardNumber.slice(-4)}</span>
      </div>
      <div className={'card-info-content'}>
        <span>Card Name</span>
        <span className={'card-name'}>{cardName}</span>
      </div>
      <div className={'card-info-content'}>
        <span>Status</span>
        <span style={{color: `${cardStatus === 'Active' ? '#00c700' : 'red'}`}}>{cardStatus}</span>
      </div>
      <div className={'card-info-button-box'}>
        <button onClick={handleDelete}>Delete card</button>
      </div>
    </div>
  )
}