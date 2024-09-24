import { CardInfoBoxIcon } from '/src/assets/img/card/CardInfoBoxIcon.jsx';

import './CardInfoBox.css';

export const CardInfoBox = ({ cardType, cardBank, cardName, cardNumber, cardStatus }) => {
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
        <button>View Details</button>
      </div>
    </div>
  )
}