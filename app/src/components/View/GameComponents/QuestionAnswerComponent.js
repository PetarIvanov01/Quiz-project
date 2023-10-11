import { memo, useEffect, useState } from "react";
import { AnswerContainer, QuestionBoxStyle, SectionStyle } from "../../../styles/ViewStyle/Game.style";

import decodeHtmlEntities from "../../../util/decode";
import AnswerComponent from "./AnswerField";

const QuestionAndAnswers = ({ currentQuestion, onClickReset }) => {

    const [isAnswered, setAnswer] = useState(false);
    const [isDisabled, setDisable] = useState(false);

    const [isCorrect, setIsCorrect] = useState({
        name: '',
        answer: '',
        correct: 0,
    });

    useEffect(() => {

        const timeout = setTimeout(() => {
            setDisable(false)
        }, 1000)

        if (isAnswered) {
            onClickReset({ ...currentQuestion, answer: isCorrect.answer === 'correct' ? true : false });
            setAnswer(false);
        }

        return () => clearTimeout(timeout);

    }, [currentQuestion, isCorrect.answer, isAnswered, onClickReset, isDisabled])

    const onAnswerClick = (e) => {
        setAnswer(true);
        setDisable(true);

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

    }

    return (
        <>
            <QuestionBoxStyle>
                <p>{decodeHtmlEntities(currentQuestion?.question)}</p>
            </QuestionBoxStyle>

            <AnswerContainer className={isDisabled ? 'disable' : ''}>

                <SectionStyle  >
                    {currentQuestion?.answers.map((answer, index) => (
                        <AnswerComponent
                            key={index}
                            index={index}
                            answer={answer}
                            isCorrect={isCorrect}
                            onAnswerClick={onAnswerClick}
                        />
                    ))}
                </SectionStyle>

            </AnswerContainer >
        </>
    )
}

export default memo(QuestionAndAnswers)