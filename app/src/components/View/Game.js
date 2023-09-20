import { useEffect, useState } from "react";
import { useNavContext } from "../../context/navigation";
import { Answer, AnswerContainer, AnswerField, ExitButton, GamePlayStyle, LogoForGames, QuestionBoxStyle, SectionStyle, TimerStyle } from "../../styles/ViewStyle/Game.style";
import { Link } from "react-router-dom";
import ExitDialogComponent from "./ExitDialog";

export default function GamePlay() {

    const { isDisabled } = useNavContext();
    const [timer, setTimer] = useState(10);
    const [showExitConfirmation, setShowExitConfirmation] = useState(false);

    useEffect(() => {
        isDisabled();

        const countdownInterval = setInterval(async () => {
            if (!showExitConfirmation) {

                if (timer > 0) {
                    setTimer(timer - 1);
                } else {
                    clearInterval(countdownInterval);
                    setTimer(10)
                }
            }
        }, 1000);

        return () => clearInterval(countdownInterval);

    }, [isDisabled, timer, showExitConfirmation])


    const showExitDialog = () => {

        setShowExitConfirmation(true);

    }



    return (
        <GamePlayStyle>
            <ExitButton onClick={showExitDialog} ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" /></svg></ExitButton>
            <LogoForGames>

                <Link><img src="/home-imgs/logo-home@3x.png" alt="" /></Link>

            </LogoForGames>
            <TimerStyle >
                <p>{timer}</p>
            </TimerStyle>

            <QuestionBoxStyle>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio aut repellendus possimus excepturi ut, autem reiciendis recusandae accusamus illo. Ea accusamus a mollitia obcaecati illum! Cupiditate quasi facilis laboriosam quis saepe explicabo culpa impedit odio et nulla. Ea exercitationem sequi rerum. Natus nostrum quo, blanditiis enim rerum ad quos dicta.?</p>
            </QuestionBoxStyle>

            <AnswerContainer>
                <SectionStyle>
                    <AnswerField>
                        <p>A.</p>
                        <Answer>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, incidunt!</Answer>
                    </AnswerField>

                    <AnswerField>
                        <p>B.</p>
                        <Answer>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Answer>
                    </AnswerField>
                </SectionStyle>

                <SectionStyle>
                    <AnswerField>
                        <p>C.</p>
                        <Answer>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, optio.</Answer>
                    </AnswerField>

                    <AnswerField>
                        <p>D.</p>
                        <Answer>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Answer>
                    </AnswerField>
                </SectionStyle>
            </AnswerContainer >

            {showExitConfirmation && <ExitDialogComponent setShowExitConfirmation={setShowExitConfirmation} />}

        </GamePlayStyle>
    )
}