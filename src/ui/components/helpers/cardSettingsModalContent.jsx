import { ModalCardsList } from '/src/ui/components/organisms/Modals/ModalCardsList.jsx';

export const cardSettingsModalContent = {
  'Block Card': <ModalCardsList status={'Active'}/>,
  'Activate Card': <ModalCardsList status={'Block'}/>,
  'Add Pin Code': <div></div>,
  'Change Pin Code': <div></div>,
  'Card Theme': <div></div>,
}