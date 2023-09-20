import PropTypes from "prop-types";

import {
  ModalBackGround,
  ModalWrapper,
  ModalTitle,
  ModalText,
  ModalButtonWrapper,
  ModalConfirmButton,
  ModalCancelButton,
} from "./styles";

export const ClearListModal = ({ handleClearList, handleCloseModal }) => {
  return (
    <ModalBackGround>
      <ModalWrapper>
        <ModalTitle>clear list</ModalTitle>

        <ModalText>are you sure that you want to clear your list?</ModalText>

        <ModalButtonWrapper>
          <ModalConfirmButton onClick={handleClearList}>
            clear
          </ModalConfirmButton>
          <ModalCancelButton onClick={handleCloseModal}>
            cancel
          </ModalCancelButton>
        </ModalButtonWrapper>
      </ModalWrapper>
    </ModalBackGround>
  );
};

ClearListModal.propTypes = {
  handleClearList: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};
