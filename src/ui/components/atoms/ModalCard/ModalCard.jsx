import mastercard from '/src/assets/img/card/card-master.svg';
import visa from '/src/assets/img/card/card-visa.png'

import './ModalCard.css';

export const ModalCard = ({ cardBank }) => {
  return (
    <div className={'modal-card'}>
      <span>BankDash</span>

      {cardBank === 'ABM' || cardBank === 'BRC' ? (
        <img src={visa} alt={'bank'}/>
      ) : (
        <img src={mastercard} alt={'bank'}/>
      )}
    </div>
  )
}