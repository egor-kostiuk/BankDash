import { useState } from 'react';

import styles from './NavSettingsButton.module.css';

export const NavSettingsButton = ({ img, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFilling, setIsFilling] = useState(false);

  const toggleDropdown = () => {
    setIsFilling(true);

    setIsOpen(prev => !prev);

    setTimeout(() => {
      setIsFilling(false);
    }, 500);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div style={{position: 'relative'}}>
      <button
        className={`${styles.btn} ${isFilling ? styles.filling : ''}`}
        onClick={toggleDropdown}
      >
        <img src={img} alt={''}/>
        {isFilling && <div className={styles.overlay}></div>}
      </button>
      <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
        {children}
      </div>
      {isOpen && <div className={'dropdown-overlay'} onClick={closeDropdown}></div>}
    </div>
  )
}