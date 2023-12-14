import { useEffect, useMemo, useState } from "react";
import { AnswerContainer, QuestionBoxStyle, SectionStyle } from "../../../styles/ViewStyle/Game.style";

import decodeHtmlEntities from "../../../util/decode";
import AnswerComponent from "./AnswerField";

const QuestionAndAnswers = ({ currentQuestion, onClickReset }) => {

    const [answerStatus, setAnswerStatus] = useState({
        isAnswered: false,
        isDisabled: false
    });

    const [answerData, setAnswerData] = useState({
        name: '',
        answer: '',
        correct: 0,
    });

    useEffect(() => {

        const timeout = setTimeout(() => {
            setAnswerStatus(prev => ({ ...prev, isDisabled: false }));

        }, 1000)

        if (answerStatus.isAnswered) {
            onClickReset({ ...currentQuestion, answer: answerData.answer === 'correct' ? true : false });
            setAnswerStatus(prev => ({ ...prev, isAnswered: false }));
        }

        return () => clearTimeout(timeout);

    }, [currentQuestion, answerData.answer, answerStatus.isAnswered, onClickReset, answerStatus.isDisabled])


    const onAnswerClickMemoized = useMemo(() => {

        return (e) => {
            setAnswerStatus(prev => ({ ...prev, isAnswered: true, isDisabled: true }));
            const target = e.currentTarget;
            const answer = target.getAttribute('data-answer');
            const name = target.getAttribute('data-name');

            if (answer === 'true') {
                setAnswerData((prev) => ({
                    name,
                    answer: 'correct',
                    correct: prev.correct += 1
                }));
            }
            else if (answer === 'false') {
                setAnswerData((prev) => ({
                    name,
                    answer: 'in-correct',
                    correct: prev.correct
                }));
            }
        }
    }, []);

    return (
        <>
            <QuestionBoxStyle>
                <p>{decodeHtmlEntities(currentQuestion?.question)}</p>
            </QuestionBoxStyle>

            <AnswerContainer className={answerStatus.isDisabled ? 'disable' : ''}>

                <SectionStyle  >
                    {currentQuestion?.answers.map((answer, index) => (
                        <AnswerComponent
                            key={index}
                            index={index}
                            answer={answer}
                            answerData={answerData}
                            onAnswerClick={onAnswerClickMemoized}
                        />
                    ))}
                </SectionStyle>

            </AnswerContainer >
        </>
    )
}

export default QuestionAndAnswers