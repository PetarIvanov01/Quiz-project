import decodeHtmlEntities from '../../../util/decode';
import styles from "../../../css/answer.module.css"
import { Answer, AnswerField } from "../../../styles/ViewStyle/Game.style";

const AnswerComponent = ({ answer, answerData, onAnswerClick, index }) => {
    
    return (
        <AnswerField
            className={`${answerData.name === answer.text && styles[answerData.answer]}`}
            data-name={answer.text}
            data-answer={answer.correct}
            onClick={onAnswerClick}
        >
            <p>{String.fromCharCode(65 + index)}. </p>
            <Answer>{decodeHtmlEntities(answer.text)}</Answer>
        </AnswerField>
    );
};

export default AnswerComponent;
