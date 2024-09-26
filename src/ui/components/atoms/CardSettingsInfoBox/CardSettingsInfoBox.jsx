import { useState } from 'react';
import { CardSettingsModal } from '/src/ui/components/atoms/CardSettingsModal/CardSettingsModal.jsx';
import { cardSettingsModalContent } from '/src/ui/components/helpers/cardSettingsModalContent.jsx';

import './CardSettingsInfoBox.css';

export const CardSettingsInfoBox = ({ img, title, subtitle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleOpenModal = () => {
    setModalContent(cardSettingsModalContent[title] || null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className={'card-settings-info-box'} onClick={handleOpenModal}>
        <div className={`card-settings-img ${title.slice(0, title.indexOf(' '))}`}>
          <img src={img} alt={title}/>
        </div>
        <div className={'card-settings-content'}>
          <span>{title}</span>
          <span>{subtitle}</span>
        </div>
      </button>

      <CardSettingsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      >
        {modalContent}
      </CardSettingsModal>
    </>
  )
}