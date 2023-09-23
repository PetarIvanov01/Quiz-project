import styled from "styled-components";
import { Logo } from "../Main/Main.style";
import { Link } from "react-router-dom";



const GamePlayStyle = styled.div`

    width: 100%;
    position: relative;

`;

const LogoForGames = styled(Logo)`

    a {
        cursor: auto;

      }

`

const TimerStyle = styled.div`
    width: max-content;
    margin-left: auto;
    margin-right: 5em;
    
    p {
        font-size: 50px;
        font-family: var(--font-lemon);
    }
`

const QuestionBoxStyle = styled.div`

    background-color: var(--color-palegoldenrod);
    max-width: 550px;
    min-height: 300px;
    border-radius: 20px;
    margin: 0 auto;
    margin-top: 2em;

    p {
        font-size: 1.2em ;
        font-family: var(--font-mooli);
        padding: 1em ;
    }
`
const AnswerContainer = styled.div`

    margin-top: 10em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5em;


`
const SectionStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
    margin-bottom:1em;

`
const AnswerField = styled.div`

    cursor: pointer;
    border-radius: var(--br-11xl);
    width: 400px;
    min-height: 150px;
    background-color: var(--color-palegoldenrod);
    display: flex;
    align-items: center;

    p {
        width: max-content;
        margin: auto 0;
        padding-left:1em;
        font-size: 1.5em;
        font-weight: bold;

    }

   @media (max-width: 1000px) {
        width: 350px;
    }

`
const Answer = styled.span`
    width: max-content;
    padding: .50em .50em;
    display: block;
    font-size: 1.2em;

`

const ExitButton = styled(Link)`
    display: block;
    text-decoration: none;
    color: black;
    font-size: 1.2em;
    position: absolute;
    top: 20px;
    right: 20px;
`

export { GamePlayStyle, LogoForGames, TimerStyle, QuestionBoxStyle, AnswerField, AnswerContainer, Answer, SectionStyle, ExitButton }