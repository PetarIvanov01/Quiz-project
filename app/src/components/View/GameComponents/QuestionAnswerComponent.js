import { useState } from "react";
import styles from "../../../css/answer.module.css"
import { Answer, AnswerContainer, AnswerField, QuestionBoxStyle, SectionStyle } from "../../../styles/ViewStyle/Game.style";

export default function QuestionAndAnswers({ quizData }) {

    const [isCorrect, setIsCorrect] = useState({
        name: '',
        answer: ''
    });

    const onAnswerClick = (e) => {

        const target = e.currentTarget;
        const answer = target.getAttribute('data-answer');
        const name = target.getAttribute('data-name');

        if (answer === 'true') {
            setIsCorrect({
                name,
                answer: 'correct'
            });
        }
        else if (answer === 'false') {
            setIsCorrect({
                name,
                answer: 'in-correct'
            });
        }
    }


    return (
        <>
            <QuestionBoxStyle>
                <p>{quizData?.question}</p>
            </QuestionBoxStyle>

            <AnswerContainer>

                <SectionStyle>
                    <AnswerField
                        className={isCorrect.name === quizData?.answers[0]?.text && styles[isCorrect.answer]}
                        data-name={quizData?.answers[0]?.text}
                        data-answer={quizData?.answers[0]?.correct}
                        onClick={onAnswerClick} >
                        <p>A.</p>
                        <Answer >{quizData?.answers[0]?.text}</Answer>
                    </AnswerField>

                    <AnswerField
                        className={isCorrect.name === quizData?.answers[1]?.text && styles[isCorrect.answer]}
                        data-name={quizData?.answers[1]?.text}
                        data-answer={quizData?.answers[1]?.correct}
                        onClick={onAnswerClick} >
                        <p>B.</p>
                        <Answer>{quizData?.answers[1]?.text}</Answer>
                    </AnswerField>
                </SectionStyle>

                <SectionStyle>
                    <AnswerField
                        className={isCorrect.name === quizData?.answers[2]?.text && styles[isCorrect.answer]}
                        data-name={quizData?.answers[2]?.text}
                        data-answer={quizData?.answers[2]?.correct}
                        onClick={onAnswerClick} >
                        <p>C.</p>
                        <Answer>{quizData?.answers[2]?.text}</Answer>
                    </AnswerField>

                    <AnswerField
                        className={isCorrect.name === quizData?.answers[3]?.text && styles[isCorrect.answer]}
                        data-name={quizData?.answers[3]?.text}
                        data-answer={quizData?.answers[3]?.correct}
                        onClick={onAnswerClick} >
                        <p>D.</p>
                        <Answer>{quizData?.answers[3]?.text}</Answer>
                    </AnswerField>
                </SectionStyle>

            </AnswerContainer >
        </>
    )
}