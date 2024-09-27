import { CurrencyText } from '/src/utils/CurrencyText.jsx';
import { ModalCard } from '/src/ui/components/atoms/ModalCard/ModalCard.jsx';

import './ModalCardBox.css';

export const ModalCardBox = ({ cardBank, cardType, cardBalance, cardNumber }) => {
  return (
    <button className={'modal-card-box'}>
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