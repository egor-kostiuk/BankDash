import { useCopyToClipboard } from '/src/hooks/useCopyToClipboard.js';
import { CurrencyText } from '/src/utils/CurrencyText.jsx';
import { bankImgList } from '/src/helpers/bankImgList.js';

import './Card.css';

export const Card = ({ cardType, cardBalance, cardName, cardTerm, cardNumber, cardBank }) => {
  const { copyToClipboard } = useCopyToClipboard();

  const handleCopy = () => {
    const numberWithoutSpaces = cardNumber.replace(/\s+/g, '');
    copyToClipboard(numberWithoutSpaces);
  };

  return (
    <div className={`card-wrapper ${cardType}`}>
      <div className={'card-content-title'}>
        <div className={'card-content-title-balance'}>
          <span>Balance</span>
          <CurrencyText>{cardBalance}</CurrencyText>
        </div>
        <img src={bankImgList.cardChipImg} alt={'chip'}/>
      </div>
      <div className={'card-content-main'}>
        <div className={'card-content-main-data'}>
          <span>CARD HOLDER</span>
          <span>{cardName}</span>
        </div>
        <div className={'card-content-main-data'}>
          <span>VALID THRU</span>
          <span>{cardTerm}</span>
        </div>
        <div className={'card-content-main-data'}>
          <span>BANK</span>
          <span>{cardBank}</span>
        </div>
      </div>
      <div className={'card-content-number'}>
        <span onClick={handleCopy}>{cardNumber.replace(/(.{4})/g, '$1 ')}</span>
        {cardBank === 'ABM' || cardBank === 'BRC' ? (
          <img style={{width: 44, height: 30}} src={bankImgList.visaImg} alt={'bank'}/>
        ) : (
          <img src={bankImgList.mastercardImg} alt={'bank'}/>
        )}
      </div>
    </div>
  )
}