import { doc, updateDoc } from 'firebase/firestore';
import { db } from '/src/services/api/firebase.js'
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

import { CurrencyText } from '/src/utils/CurrencyText.jsx';
import { ModalCard } from '/src/ui/components/atoms/ModalCard/ModalCard.jsx';

import './ModalCardBox.css';

export const ModalCardBox = ({ cardId, cardBank, cardStatus, cardType, cardBalance, cardNumber }) => {

  function changeStatus(status) {
    return status === 'Active' ? 'Block' : 'Active';
  }

  const handleClick = async () => {
    const newStatus = changeStatus(cardStatus);

    const result = await Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to '${newStatus === 'Active' ? 'Activate' : 'Block'}' your card?`,
      showCancelButton: true,
      backdrop: `rgba(0,0,0,0.75)`,
      customClass: {
        popup: 'custom-swal-popup',
        title: 'custom-swal-title',
        htmlContainer: 'custom-swal-text',
        confirmButton: 'custom-swal-confirm-button',
        cancelButton: 'custom-swal-cancel-button',
      },
      confirmButtonText: 'Yes, change!',
      cancelButtonText: 'No, cancel',
    });

    if (result.isConfirmed) {
      try {
        const cardDocRef = doc(db, 'cards', cardId);
        await updateDoc(cardDocRef, {cardStatus: newStatus});
        toast.success('Card status changed');
        console.log('Card status changed');
      } catch (error) {
        toast.error('Error updating card status');
        console.error('Error updating status in Firestore:', error);
      }
    }
  };

  return (
    <button className={'modal-card-box'} onClick={handleClick}>
      <div className={'modal-card-title'}>
        <ModalCard cardBank={cardBank}/>
        <span className={'modal-card-number'}>{`** ${cardNumber.slice(-4)}`}</span>
      </div>
      <span style={{WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent'}} className={`modal-card-type ${cardType}`}>{cardType}</span>
      <span className={'modal-card-balance'}>
        <CurrencyText>{cardBalance}</CurrencyText>
      </span>
    </button>
  )
}