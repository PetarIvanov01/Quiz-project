import { ExitConfirmationModal, ExitConfirmationOverlay, ModalButton, ModalText } from "../../styles/modals/ExitDialog.style";

export default function ExitDialogComponent({ onClickExitConfirm, onClickExitCancel }) {

    return (
        <ExitConfirmationOverlay>
            <ExitConfirmationModal>
                <ModalText>Are you sure you want to exit the game?</ModalText>
                <ModalButton onClick={onClickExitConfirm}>Yes</ModalButton>
                <ModalButton onClick={onClickExitCancel}>No</ModalButton>
            </ExitConfirmationModal>
        </ExitConfirmationOverlay>
    )
}