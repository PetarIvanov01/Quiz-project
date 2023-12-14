import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

import useQuizTimer from "../../../hooks/useQuizTimer";
import useQuizNavigation from "../../../hooks/useQuizNavigation";
import useQuizReset from "../../../hooks/useQuizReset";
import useQuizExit from "../../../hooks/useQuizExit";

import { ExitButton, GamePlayStyle, LogoForGames, TimerStyle } from "../../../styles/ViewStyle/Game.style";
import ExitDialogComponent from "../ExitDialog";
import QuestionAndAnswers from "./QuestionAnswerComponent";

export default function GamePlay() {

    const { quizData, category } = useOutletContext();

    const { onClickExitBox,
        showExitConfirmation,
        onCompleteGame,
        onClickExitCancel,
        onClickExitConfirm } = useQuizExit(category, quizData);

    const { timer, setTimer } = useQuizTimer(showExitConfirmation);
    const { onClickReset, userAnswers } = useQuizReset(setTimer);
    const { currentQuestion } = useQuizNavigation(quizData, timer, onCompleteGame, userAnswers);

    return (
        <GamePlayStyle>
            <ExitButton onClick={onClickExitBox} ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" /></svg></ExitButton>

            <LogoForGames>
                <Link><img src="/home-imgs/logo-home@3x.png" alt="" /></Link>
            </LogoForGames>

            <TimerStyle >
                <p>{timer}</p>
            </TimerStyle>

            <QuestionAndAnswers
                currentQuestion={currentQuestion}
                onClickReset={onClickReset}
                onCompleteGame={onCompleteGame} />

            {showExitConfirmation && <ExitDialogComponent
                onClickExitCancel={onClickExitCancel}
                onClickExitConfirm={onClickExitConfirm} />}
        </GamePlayStyle>
    )
}