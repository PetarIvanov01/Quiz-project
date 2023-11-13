import { useState } from "react";

export default function useQuizNavigation(quizData, timer, onCompleteGame, userAnswers) {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    if (timer < 0) {

        if (currentQuestionIndex === quizData.length - 1) {
            onCompleteGame(userAnswers);
        }
        else {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        }
    }

    const currentQuestion = quizData[currentQuestionIndex];

    return { currentQuestion };
}

