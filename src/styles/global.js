import { createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background: ${({theme}) => theme.COLORS.BACKGROUND_500};
        color: ${({theme}) => theme.COLORS.GRAY_100};

        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 1.6rem;
        outline: none;
    }

    a {
        text-decoration: none;
        color: ${({theme}) => theme.COLORS.PINK};
    }

    button, a{
        cursor: pointer;
        transition: filter .3s;
    }

    button:hover, a:hover {
        filter: brightness(.9);
    }

    ::-webkit-scrollbar {
        width: 1.4rem;
        height: 1.4rem;
    }
    ::-webkit-scrollbar-button {
        width: 0px;
        height: 0px;
    }
    ::-webkit-scrollbar-thumb {
        background: #ff859b;
        border: .4rem solid ${({theme}) => theme.COLORS.BACKGROUND_500};
        border-radius: 2rem;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #c46879;
    }
    ::-webkit-scrollbar-thumb:active {
        background: #713d44;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
        border: 0px none #ffffff;
        border-radius: 34px;
    }
    ::-webkit-scrollbar-track:hover {
        background: transparent;
    }
    ::-webkit-scrollbar-track:active {
        background: transparent;
    }
    ::-webkit-scrollbar-corner {
        background: transparent;
    }
`;