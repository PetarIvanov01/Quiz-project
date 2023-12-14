import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNavContext } from "../context/navigation";

export default function useQuizExit(category, quizData) {

    const { notDisabled } = useNavContext();

    const navigate = useNavigate();
    const [showExitConfirmation, setShowExitConfirmation] = useState(false);

    const onClickExitBox = useCallback(() => {
        setShowExitConfirmation(true);
    }, []);

    const onClickExitCancel = useCallback(() => {
        setShowExitConfirmation(false);
    }, []);

    const onClickExitConfirm = useCallback(() => {
        navigate('/');
    }, []);

    const onCompleteGame = useCallback((questionsWithAnswers) => {
        notDisabled();
        navigate(`/game/${category}/complete`, { state: { questionsWithAnswers, quizData } });
    }, [category, notDisabled]);

    return {
        showExitConfirmation,
        onClickExitBox,
        onClickExitCancel,
        onClickExitConfirm,
        onCompleteGame
    };
}
