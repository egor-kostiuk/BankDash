import { useState } from 'react';
import { useEditProfileImg } from '/src/hooks/useEditProfileImg.js';

import { NavProfileDropdown } from '../../../NavProfileDropdown/NavProfileDropdown.jsx';

import styles from './NavProfileButton.module.css';

export const NavProfileButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { profileImg } = useEditProfileImg();
  const [isFilling, setIsFilling] = useState(false);

  // Function for dropdown open and click styles
  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
    setIsFilling(true);

    setTimeout(() => {
      setIsFilling(false);
    }, 500);
  };

  return (
    <div style={{position: 'relative'}}>
      <button
        className={`${styles.btn} ${isFilling ? styles.filling : ''}`}
        onClick={toggleDropdown}
      >
        <img src={profileImg} alt={'profile'} />
        {isFilling && <div className={styles.overlay}></div>}
      </button>
      <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
        <NavProfileDropdown img={profileImg} closeDropdown={() => setIsOpen(false)} />
      </div>
      {isOpen && <div className={'dropdown-overlay'} onClick={() => setIsOpen(false)} ></div>}
    </div>
  );
};