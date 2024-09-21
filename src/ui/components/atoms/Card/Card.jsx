import { CurrencyText } from '/src/utils/CurrencyText.jsx';

import './Card.css';

export const Card = ({ number, balance , color, name }) => {
  return (
    <div className={'card-wrapper'}>
      <div className={'card-content-title'}>
        <div className={'card-content-title-balance'}>
          <span>Balance</span>
          <CurrencyText>{balance}</CurrencyText>
        </div>
        <img src={`/src/assets/img/card/card-chip-${color}.svg`} alt={'chip'}/>
      </div>
      <div className={'card-content-main'}>
        <div className={'card-content-main-data'}>
          <span>CARD HOLDER</span>
          <span>{name}</span>
        </div>
        <div className={'card-content-main-data'}>
          <span>VALID THRU</span>
          <span>12/22</span>
        </div>
      </div>
      <div className={'card-content-number'}>
        <span>{number.replace(/(.{4})/g, '$1 ')}</span>
        <img src={`/src/assets/img/card/card-bank-${color}.svg`} alt={'bank'}/>
      </div>
    </div>
  )
}