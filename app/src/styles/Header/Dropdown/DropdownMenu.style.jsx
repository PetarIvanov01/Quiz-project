import styled from "styled-components";

const DropDown = styled.nav`

    margin: 0 auto;
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4em;
    height: 40%;
    width: 3em;

    &.active {
        background-color: #D9EBD0;
        padding: 0 2em;
        border-radius: 1em;
        box-shadow: 0 2px 15px 0 rgba(0,0,0,.3);
        transition:  150ms ease-in-out;
    }

    &.disable {
        pointer-events: none ;
        opacity: 0.6 ; 
    }

    .logo-mini {
        width: 40px;
    }

`

const DropDownMenu = styled.div`

        list-style-type: none;
        display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
        flex-direction: column;
        gap: 2em;
        align-items: center;
        position: absolute;
        top: 15%;
`

const Menu = styled.div`

    display: flex;
    justify-content: center;
    margin-top: 10px;
    cursor: pointer;

    .logo {
        width: 70px;
    }

`

export { DropDownMenu, Menu, DropDown }