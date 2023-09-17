import { useEffect } from "react";
import { useNavContext } from "../../context/navigation";
import { Answer, AnswerContainer, AnswerField, FirstRow, GamePlayStyle, LogoForGames, QuestionBoxStyle, SecondRow, SectionStyle, TimerStyle } from "../../styles/ViewStyle/Game.style";
import { Link } from "react-router-dom";

export default function GamePlay() {

    const { isDisabled } = useNavContext();

    useEffect(() => {

        isDisabled();

    }, [])

    return (
        <GamePlayStyle>
            <LogoForGames>
                <Link><img src="/home-imgs/logo-home@3x.png" alt="" /></Link>
                {/* <div className="greating">
               <p>Prepare to be quizzed! 🤓 Are you up for the challenge?</p>
            </div> */}
            </LogoForGames>
            <TimerStyle >
                <p>10</p>
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


        </GamePlayStyle>
    )
}