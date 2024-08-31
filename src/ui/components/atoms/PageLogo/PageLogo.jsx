import { useNavigate } from "react-router-dom";

import pageLogo from "/src/assets/img/page-logo.svg";

import "./PageLogo.css";

export const PageLogo = () => {
  const navigate = useNavigate();

  function logoNavigate() {
    navigate('/bankdash')
  }

  return (
    <button className={'logo-wrapper'} onClick={logoNavigate}>
        <img src={pageLogo} alt={'Bankdash'}/>
        <span>Bankdash.</span>
    </button>
  )
}