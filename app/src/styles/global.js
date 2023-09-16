import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #root {
        min-height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        background-color: wheat;
}
:root {

/* fonts */
--font-inter: Inter;
--font-lemon: 'Lemon', cursive;

/* font sizes */
--font-size-xl: 20px;

/* Colors */
--color-black: #000;
--color-palegoldenrod: #d0da95;

/* Border radiuses */
--br-11xl: 30px;

}
`;

export default GlobalStyle