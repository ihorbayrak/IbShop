import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: "Montserrat", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    html,
    body {
        height: 100%;
    }

    body {
        min-height: 100%;
        background: #f7f7f8;
    }

    ul,
    li,
    dl {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
        display: inline-block;
        &:hover {
        text-decoration: none;
        color: inherit;
        }
    }

    p {
        margin: 0;
        padding: 0;
    }

    main {
        padding: 20px 50px;
        margin-top: 30px;
    }
`;
