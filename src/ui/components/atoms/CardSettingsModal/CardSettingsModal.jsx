import { useEffect } from 'react';
import './CardSettingsModal.css';

export const CardSettingsModal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={'modal-overlay'}>
      <div className={'modal-content'}>
        <button className={'modal-close-btn'} onClick={onClose}>✕</button>
        {children}
      </div>
    </div>
  )
}