import pageLogo from "/src/assets/img/page-logo.png";

import "./PageLogo.css";

export const PageLogo = () => {
  return (
    <button className={'logo-wrapper'}>
        <img src={pageLogo} alt={'Bankdash'}/>
        <span>Bankdash.</span>
    </button>
  )
}