import styled from "styled-components";

const ExitConfirmationOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); 
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; 
`;

const ExitConfirmationModal = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const ModalText = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const ModalButton = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  cursor: pointer;
`;

export { ExitConfirmationModal, ExitConfirmationOverlay, ModalButton, ModalText }