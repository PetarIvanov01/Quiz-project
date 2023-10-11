import styled from "styled-components";
import { Logo } from "../../Main/Main.style";


export const PageLogo = styled(Logo)`

    margin-top: 20em;

    .sign-in-greeting{
        font-family: var(--font-mooli);
        margin: 1em 0;
        font-size: 1.3em;
        }
`
export const FormStyleContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const FormStyle = styled.form`
    margin-top: 2em;
    display: flex;
    flex-direction: column;
`

export const TypeFieldStyle = styled.div`
    margin: 10px 0;
    position: relative;
    width: 280px;   
    height: 50px;

    & label {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -150%);
        pointer-events: none;
        color: #000; 
    }

    & input {
        border-radius: 30px;
        width: 100%;
        height: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        outline: none;
        background-color: var(--color-palegoldenrod);
    }
`

export const ActionLink = styled.div`
    display: flex;
    justify-content: space-around;

    & a {
        text-decoration: none;
        color: black;
    }
    & a:hover {
        text-decoration: underline;
    }
    & p {
        font-family: var(--font-mooli);
    }

`