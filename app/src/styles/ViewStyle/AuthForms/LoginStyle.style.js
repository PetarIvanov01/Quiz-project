import styled from "styled-components";
import { Logo } from "../../Main/Main.style";


export const PageLogo = styled(Logo)`

    max-width: 80%;

    .sign-in-greeting{
        font-family: var(--font-mooli);
        margin: 1em 0;
        font-size: 1.3em;
        text-align: center;
        }
`
export const FormStyleContainer = styled.div`
    background-color: #F2D280;
    width: 60%;
    border-radius: 30px ;
    margin: 0 auto;
    margin-top: 15em;
    padding: 1em 0;

`

export const FormStyle = styled.form`
    display: flex;
    align-items:center;
    flex-direction: column;
    margin: 2em 0;

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
        border: 2px solid #919480;
        outline: none;
        background-color: var(--color-palegoldenrod);
    }
`

export const ActionLink = styled.div`

    display: flex;
    gap: 6em;
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

export const SubmitBtn = styled.div`
    display: flex;
    padding: 1em;

    & input {
        background-color: var(--color-palegoldenrod);
        padding: 0.4em 1.5em;
        border-radius: 30px;
        border: 2px solid #919480;
        cursor:pointer;
    }

`