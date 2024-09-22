import { CurrencyText } from '/src/utils/CurrencyText.jsx';
import { bankImgList } from '/src/helpers/bankImgList.js';

import './Card.css';

export const Card = ({ number, type, balance, name, bank, term }) => {
  return (
    <div className={`card-wrapper ${type}`}>
      <div className={'card-content-title'}>
        <div className={'card-content-title-balance'}>
          <span>Balance</span>
          <CurrencyText>{balance}</CurrencyText>
        </div>
        <img src={bankImgList.cardChipWhiteImg} alt={'chip'}/>
      </div>
      <div className={'card-content-main'}>
        <div className={'card-content-main-data'}>
          <span>CARD HOLDER</span>
          <span>{name}</span>
        </div>
        <div className={'card-content-main-data'}>
          <span>VALID THRU</span>
          <span>{term}</span>
        </div>
        <div className={'card-content-main-data'}>
          <span>BANK</span>
          <span>{bank}</span>
        </div>
      </div>
      <div className={'card-content-number'}>
        <span>{number.replace(/(.{4})/g, '$1 ')}</span>
        {bank === 'ABM' || bank === 'BRC' ? (
          <img style={{width: 44, height: 30}} src={bankImgList.visaImg} alt={'bank'}/>
        ) : (
          <img src={bankImgList.mastercardWhiteImg} alt={'bank'}/>
        )}
      </div>
    </div>
  )
}