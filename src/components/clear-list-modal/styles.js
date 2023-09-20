import styled from "styled-components";

export const ModalBackGround = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(4 4 4 / 0.6);
`;

export const ModalWrapper = styled.div`
  margin: 0 0.5rem;
  padding: 2rem;
  border-radius: 5px;
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: #444;
  background-color: #fff;
`;

export const ModalTitle = styled.p`
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 500;
`;

export const ModalText = styled.p`
  margin-bottom: 1.5rem;
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  & > button {
    padding: 0.5rem;
    border-radius: 3px;
    font-size: 1rem;
    font-weight: 500;
  }

  & > button:hover {
    cursor: pointer;
  }
`;

export const ModalConfirmButton = styled.button`
  background-color: #fff;
  border: 1px solid #cc2014;
  color: #444;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 2px 2px 0 0 #cc2014;
    transition: 0.2s;
    background-color: #ee6055;
    color: #fff;
  }

  &:not(:hover) {
    transition: 0.2s;
  }
`;

export const ModalCancelButton = styled.button`
  border: 1px solid #444;
  background-color: #fff;
  color: #444;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 2px 2px 0 0 #444;
    transition: 0.2s;
  }

  &:not(:hover) {
    transition: 0.2s;
  }
`;
