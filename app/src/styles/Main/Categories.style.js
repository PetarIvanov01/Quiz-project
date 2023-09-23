import styled from "styled-components";

const CategoriesSection = styled.section`
    margin-top: 4em;
    display: flex;
    gap: 3.5em;
    flex-direction: column;
    align-items: center;


.categories-text{
    font-size: 3em;
    font-family: var(--font-lemon);
    margin-bottom: 2em;
}
`

const GameCardStyle = styled.div`

    min-width: 560px;
    display: flex;
    align-items:center;
    gap: 5em;
    background-color: var(--color-palegoldenrod);
    border-radius: var(--br-11xl)

    
`

const GameCategory = styled.div`

    display: flex;
    align-items: center;
    gap: 1em;
    flex-grow: 1;
    
    .img-category{
        margin: 1em;
        width: 5em;
    }

    .text-category{
        font-weight: bold;
        font-size: 1.4em;
        font-family: var(--font-lemon);
    }

`

const GameQuestions = styled.div`
    margin-left: auto;
    display: flex;
    padding: 0.75em;
    gap: 1em;
    border-radius: var(--br-11xl);
    background-color: #d9d9d9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    img{
        display: block;
        width: 15px;
    }
    p {
        font-size: 13px;
        font-family: var(--font-lemon);
        color: var(--color-black);

    }
`

const GamePlayButton = styled.div`
    margin-left: auto;
    margin-right: 1em;

    img {
        width: 80px;
    }
`

export { CategoriesSection, GameCardStyle, GameCategory, GameQuestions, GamePlayButton }