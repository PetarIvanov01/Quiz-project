import { memo, useEffect, useState } from "react";

import { Answer, AnswerContainer, AnswerField, QuestionBoxStyle, SectionStyle } from "../../../styles/ViewStyle/Game.style";
import styles from "../../../css/answer.module.css"

import decodeHtmlEntities from "../../../util/decode";

const QuestionAndAnswers = ({ currentQuestion, onClickReset }) => {

    const [isAnswerd, setAnswer] = useState(false);

    const [isCorrect, setIsCorrect] = useState({
        name: '',
        answer: '',
        correct: 0
    });

    useEffect(() => {

        if (isAnswerd) {
            onClickReset({ ...currentQuestion, answer: isCorrect.answer === 'correct' ? true : false });
            setAnswer(false);
        }

    }, [currentQuestion, isCorrect.answer, isAnswerd, onClickReset])

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
    }

    return (
        <>
            <QuestionBoxStyle>
                <p>{decodeHtmlEntities(currentQuestion?.question)}</p>
            </QuestionBoxStyle>

            <AnswerContainer >

                <SectionStyle>
                    <AnswerField
                        className={isCorrect.name === currentQuestion?.answers[0]?.text && styles[isCorrect.answer]}
                        data-name={currentQuestion?.answers[0]?.text}
                        data-answer={currentQuestion?.answers[0]?.correct}
                        onClick={onAnswerClick}
                    >
                        <p>A.</p>
                        <Answer >{decodeHtmlEntities(currentQuestion?.answers[0]?.text)}</Answer>
                    </AnswerField>

                    <AnswerField
                        className={isCorrect.name === currentQuestion?.answers[1]?.text && styles[isCorrect.answer]}
                        data-name={currentQuestion?.answers[1]?.text}
                        data-answer={currentQuestion?.answers[1]?.correct}
                        onClick={onAnswerClick} >
                        <p>B.</p>
                        <Answer>{decodeHtmlEntities(currentQuestion?.answers[1]?.text)}</Answer>
                    </AnswerField>
                </SectionStyle>

                <SectionStyle>
                    <AnswerField
                        className={isCorrect.name === currentQuestion?.answers[2]?.text && styles[isCorrect.answer]}
                        data-name={currentQuestion?.answers[2]?.text}
                        data-answer={currentQuestion?.answers[2]?.correct}
                        onClick={onAnswerClick} >
                        <p>C.</p>
                        <Answer>{decodeHtmlEntities(currentQuestion?.answers[2]?.text)}</Answer>
                    </AnswerField>

                    <AnswerField
                        className={isCorrect.name === currentQuestion?.answers[3]?.text && styles[isCorrect.answer]}
                        data-name={currentQuestion?.answers[3]?.text}
                        data-answer={currentQuestion?.answers[3]?.correct}
                        onClick={onAnswerClick} >
                        <p>D.</p>
                        <Answer>{decodeHtmlEntities(currentQuestion?.answers[3]?.text)}</Answer>
                    </AnswerField>
                </SectionStyle>

            </AnswerContainer >
        </>
    )
}

export default memo(QuestionAndAnswers)