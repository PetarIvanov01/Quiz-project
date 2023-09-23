import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GAMETIME = 10;

export default function useQuizTimer({ showExitConfirmation, quizData, category }) {
    
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timer, setTimer] = useState(GAMETIME);

    useEffect(() => {
        if (!showExitConfirmation) {
            // When timer reaches 0, increment the question index
            if (timer < 0 && currentQuestionIndex < quizData.length - 1) {
                setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
                setTimer(GAMETIME); // Reset timer
            }
            // When timer reaches 0 and no more questions, navigate to complete page
            else if (timer < 0 && currentQuestionIndex === quizData.length - 1) {
                return navigate(`/game/${category}/complete`);
            }

            const timeout = setTimeout(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);

            return () => clearTimeout(timeout);
        }
    }, [timer, showExitConfirmation, quizData, navigate, category, currentQuestionIndex]);

    const currentQuestion = quizData[currentQuestionIndex];

    return { timer, currentQuestion };
}
