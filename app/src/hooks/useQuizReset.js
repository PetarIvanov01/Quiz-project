import { useState } from "react"

export default function useQuizReset(setTimer) {

    const [userAnswers, setUserAnswer] = useState([]);

    const onClickReset = (currentAnswerByUser) => {
        setTimer(0)
        setUserAnswer(state => [...state, currentAnswerByUser])
    }



    return { onClickReset, userAnswers}
}