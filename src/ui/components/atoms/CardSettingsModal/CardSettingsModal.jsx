import { useEffect } from 'react';
import './CardSettingsModal.css';

export const CardSettingsModal = ({ isOpen, onClose, title, children }) => {
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

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className={'modal-overlay'} onClick={handleOverlayClick}>
      <div className={'modal-content'}>
        <button className={'modal-close-btn'} onClick={onClose}>✕</button>
        <p className={'modal-title'}>{title}</p>
        {children}
      </div>
    </div>
  )
}