import { useState } from "react";

import "./NavInputButton.css";

export const NavInputButton = ({onClick, img}) => {
  const [isFilling, setIsFilling] = useState(false);

  const handleClick = () => {
    setIsFilling(true);

    // Reset the filling state after animation completes
    setTimeout(() => {
      setIsFilling(false);
    }, 500);

    onClick();
  };

  return (
    <button
      className={`nav-input-button ${isFilling ? 'filling' : ''}`}
      onClick={handleClick}
    >
      <img src={img} alt={''}/>
      {isFilling && <div className="fill-overlay"></div>}
    </button>
  );
};