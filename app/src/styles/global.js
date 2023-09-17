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

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600&family=Mooli&family=Roboto:wght@100&display=swap');
/* fonts */
--font-mooli: 'Mooli',sans-serif;
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