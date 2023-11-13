import styled from "styled-components";


const QuizCompleteGreeting = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10em 0;

    p {
        font-size: 1.3em;
        font-family: var(--font-lemon);
    }
`

const Stats = styled.div`

    display: flex;
    justify-content: center;
    margin-bottom: 3em;

    p {
        font-size: 1.5em;
        font-family: var(--font-lemon);
    }
`

const QuestionContainer = styled.div`

    margin-left: 5em;


   & > p {
        font-size: 1.5em;
        font-family: var(--font-lemon);
        margin-bottom: 1em;
    }

`

const QuestionsBoxContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1em;

`

const QuestionBox = styled.div`
    display: flex;
    gap: 1em;

    & > p{
        font-size: 1.2em;
        text-decoration: underline;
        font-family: var(--font-mooli);
    }

    & > img {
        width: 1.2em;
        height: 1.2em;
    }
`
export { QuizCompleteGreeting, Stats, QuestionContainer, QuestionBox, QuestionsBoxContainer }