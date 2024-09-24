import { CardSettingsBoxIcon } from '/src/assets/img/card/CardSettingsBoxIcon.jsx';

import './CardSettingsBox.css';

export const CardSettingsBox = ({ cardType, cardBank, cardName, cardNumber, cardStatus }) => {
  return (
    <div className={'card-setting-box'}>
      <div className={`img-box ${cardBank}`}>
        <CardSettingsBoxIcon className={cardBank}/>
      </div>
      <div className={'card-settings-content'}>
        <span>Bank</span>
        <span style={{background: 'transparent'}} className={cardBank}>{cardBank} Bank</span>
      </div>
      <div className={'card-settings-content'}>
        <span>Card Type</span>
        <span style={{WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent'}} className={cardType}>{cardType}</span>
      </div>
      <div className={'card-settings-content'}>
        <span>Card Number</span>
        <span>**** **** {cardNumber.slice(-4)}</span>
      </div>
      <div className={'card-settings-content'}>
        <span>Card Name</span>
        <span className={'card-name'}>{cardName}</span>
      </div>
      <div className={'card-settings-content'}>
        <span>Status</span>
        <span style={{color: `${cardStatus === 'Active' ? '#00c700' : 'red'}`}}>{cardStatus}</span>
      </div>
      <div className={'button'}>
        <button>View Details</button>
      </div>
    </div>
  )
}