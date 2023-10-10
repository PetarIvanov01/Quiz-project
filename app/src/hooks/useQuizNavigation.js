import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function useQuizNavigation(quizData, category, timer, onCompleteGame, userAnswers) {

    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    useEffect(() => {

        if (timer < 0) {

            if (currentQuestionIndex === quizData.length - 1) {
                return onCompleteGame(userAnswers);
            }
            else {
                setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            }
        }

    }, [timer, currentQuestionIndex, navigate, quizData, category, onCompleteGame, userAnswers])

    const currentQuestion = quizData[currentQuestionIndex];

    return { currentQuestion };
}
