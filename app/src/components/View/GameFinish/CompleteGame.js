import { useEffect } from "react"
import { useNavContext } from "../../../context/navigation"
import { LogoForGames } from "../../../styles/ViewStyle/Game.style";
import { Link } from "react-router-dom";
import { MainStyle } from "../../../styles/Main/Main.style";
import { QuestionBox, QuestionContainer, QuestionsBoxContainer, QuizCompleteGreeting, Stats } from "../../../styles/ViewStyle/GameFinish/GameFinishStyles.style";

export default function CompleteGame() {

    const { notDisabled } = useNavContext()

    useEffect(() => {

        notDisabled();

    }, [])

    return (
        <MainStyle>
            <LogoForGames>
                <Link><img src="/home-imgs/logo-home@3x.png" alt="" /></Link>
            </LogoForGames>

            <QuizCompleteGreeting>
                <p>Quiz completed!🎉</p>
                <p>Keep up the great work!👍🧠</p>
            </QuizCompleteGreeting>

            <Stats >
                <p>Stats: 3/5</p>
            </Stats>

            <QuestionContainer>
                <p>Questions: </p>

                <QuestionsBoxContainer>
                    <QuestionBox>
                        <p>Lorem ipsum dolor sit... ?</p> <img src="/quiz-imgs/right.png" alt="" />
                    </QuestionBox>
                    <QuestionBox>
                        <p>Lorem ipsum, dolor si... ?</p> <img src="/quiz-imgs/wrong.png" alt="" />
                    </QuestionBox>
                    <QuestionBox>
                        <p>Lorem ipsum, dolor si... ?</p> <img src="/quiz-imgs/right.png" alt="" />
                    </QuestionBox>
                    <QuestionBox>
                        <p>Lorem ipsum, dolor si... ?</p> <img src="/quiz-imgs/wrong.png" alt="" />
                    </QuestionBox>
                    <QuestionBox>
                        <p>Lorem ipsum, dolor si... ?</p> <img src="/quiz-imgs/right.png" alt="" />
                    </QuestionBox>
                </QuestionsBoxContainer>

            </QuestionContainer>
        </MainStyle>
    )
}