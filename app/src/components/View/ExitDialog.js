import { useNavigate } from 'react-router-dom'

import { ExitConfirmationModal, ExitConfirmationOverlay, ModalButton, ModalText } from "../../styles/modals/ExitDialog.style";
export default function ExitDialogComponent({ setShowExitConfirmation }) {

    const navigate = useNavigate()

    const handleExitConfirm = () => {
        navigate('/')
    }

    const handleExitCancel = () => {
        setShowExitConfirmation(false);
    }

    return (
        <ExitConfirmationOverlay>
            <ExitConfirmationModal>
                <ModalText>Are you sure you want to exit the game?</ModalText>
                <ModalButton onClick={handleExitConfirm}>Yes</ModalButton>
                <ModalButton onClick={handleExitCancel}>No</ModalButton>
            </ExitConfirmationModal>
        </ExitConfirmationOverlay>
    )
}