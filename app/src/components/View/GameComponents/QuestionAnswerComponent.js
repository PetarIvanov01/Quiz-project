import { useEffect, useState } from "react";
import styles from "../../../css/answer.module.css"
import { Answer, AnswerContainer, AnswerField, QuestionBoxStyle, SectionStyle } from "../../../styles/ViewStyle/Game.style";

export default function QuestionAndAnswers({ quizData, onClickReset }) {

    const [isAnswerd, setAnswer] = useState(false);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);

    const [isCorrect, setIsCorrect] = useState({
        name: '',
        answer: '',
        correct: 0
    });

    useEffect(() => {

        if (isAnswerd) {
            setAnsweredQuestions((state) => ([...state, { ...quizData, answer: isCorrect.answer === 'correct' ? true : false }]))
        }

        console.log(answeredQuestions);
        setAnswer(false)

    }, [quizData, isCorrect.answer, isAnswerd])

    const onAnswerClick = (e) => {

        const target = e.currentTarget;
        const answer = target.getAttribute('data-answer');
        const name = target.getAttribute('data-name');

        if (answer === 'true') {
            setIsCorrect((prev) => ({
                name,
                answer: 'correct',
                correct: prev.correct += 1
            }));
        }
        else if (answer === 'false') {
            setIsCorrect((prev) => ({
                name,
                answer: 'in-correct',
                correct: prev.correct
            }));
        }
        setAnswer(true);
        onClickReset(isCorrect.correct);
    }


    return (
        <>
            <QuestionBoxStyle>
                <p>{quizData?.question}</p>
            </QuestionBoxStyle>

            <AnswerContainer >

                <SectionStyle>
                    <AnswerField
                        className={isCorrect.name === quizData?.answers[0]?.text && styles[isCorrect.answer]}
                        data-name={quizData?.answers[0]?.text}
                        data-answer={quizData?.answers[0]?.correct}
                        onClick={onAnswerClick}
                    >
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