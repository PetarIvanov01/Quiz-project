import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useNavContext } from "../../../context/navigation";
import useQuizTimer from "../../../hooks/useQuizTimer.js";

import { ExitButton, GamePlayStyle, LogoForGames, TimerStyle } from "../../../styles/ViewStyle/Game.style";
import ExitDialogComponent from "../ExitDialog";
import QuestionAndAnswers from "./QuestionAnswerComponent";
import useQuizReset from "../../../hooks/useQuizReset";

export default function GamePlay() {

    const { quizData, category } = useOutletContext();

    const { isDisabled } = useNavContext();
    const [showExitConfirmation, setShowExitConfirmation] = useState(false);
    const { timer, currentQuestion, setTimer } = useQuizTimer({ showExitConfirmation, quizData, category });

    const onClickReset = useQuizReset({ setTimer, currentQuestion })


    useEffect(() => {
        isDisabled();

    }, [isDisabled])


    return (
        <GamePlayStyle>
            <ExitButton onClick={() => setShowExitConfirmation(true)} ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" /></svg></ExitButton>
            <LogoForGames>

                <Link><img src="/home-imgs/logo-home@3x.png" alt="" /></Link>

            </LogoForGames>

            <TimerStyle >
                <p>{timer}</p>
            </TimerStyle>

            {currentQuestion.hasOwnProperty('question') && <QuestionAndAnswers quizData={currentQuestion} onClickReset={onClickReset} />}

            {showExitConfirmation && <ExitDialogComponent setShowExitConfirmation={setShowExitConfirmation} />}

        </GamePlayStyle>
    )
}