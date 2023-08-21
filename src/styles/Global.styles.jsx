import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-transform: uppercase;
        font-family: 'Shantell Sans', cursive;
    }
    body{
        background-color: ${({theme}) => theme.colors.mainColor};
        font-size: 1.5rem;
    }
    a{
        text-decoration: none;
    }

`