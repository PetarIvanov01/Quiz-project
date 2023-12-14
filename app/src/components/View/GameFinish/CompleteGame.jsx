import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom";

import formatStats from "../../../util/formatStats";

import { MainStyle } from "../../../styles/Main/Main.style";
import { LogoForGames } from "../../../styles/ViewStyle/Game.style";
import { QuestionBox, QuestionContainer, QuestionsBoxContainer, QuizCompleteGreeting, Stats } from "../../../styles/ViewStyle/GameFinish/GameFinishStyles.style";

export default function CompleteGame() {

    const location = useLocation();
    const [userQuestionAndAnswers, setQuestions] = useState([]);
    
    useEffect(() => {

        const { questionsWithAnswers } = location?.state;
        setQuestions(questionsWithAnswers);

    }, [location]);

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
                <p>Stats: {formatStats(userQuestionAndAnswers)}/5</p>
            </Stats>

            <QuestionContainer>
                <p>Questions: </p>

                <QuestionsBoxContainer>

                    {userQuestionAndAnswers.map((data, index) => {
                        return (
                            <QuestionBox key={index}>
                                <p>{data.question.substring(0, 35) + '...'}</p>
                                <img src={data.answer ? '/quiz-imgs/right.png' : '/quiz-imgs/wrong.png'} alt={data.answer ? 'right' : 'wrong'} />
                            </QuestionBox>
                        )
                    })}

                </QuestionsBoxContainer>

            </QuestionContainer>
        </MainStyle>
    )
}