import styled from "styled-components";

const MainStyle = styled.div`

    flex-grow: 1;

`

const Logo = styled.div`

    display: flex;
    flex-direction:column;
    align-items: center;
    width: max-content;
    margin: 0 auto;
    gap: 1em;
    margin-top: 2em;

    .greating {
        max-width: 75%;
        text-align: center;

        p {
            font-size: 1.5em;
        }
    }

`

export { MainStyle, Logo }