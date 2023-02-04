import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas:
    "header"
    "content"
    ;
    justify-items: center;

    main {
        padding: 4rem 2rem;
        width: 100%;
        max-width: 113rem;
        grid-area: content;

        overflow-y: auto;
        scrollbar-gutter: stable;

        display: grid;
        grid-template-rows: auto;
        grid-template-areas:
        "head"
        "form"
        "text"
        "footer"
        "buttons";
    }

    p {
        grid-area: text;
        margin-bottom: 2.4rem;
        font-size: 2rem;
        line-height: 2.6rem;
        color: ${({theme}) => theme.COLORS.GRAY_200}
    }

    @media (max-width: 700px) {
        grid-template-rows: 20rem auto;
    }
`;

export const Head = styled.div`
    width: 100%;
    
    grid-area: head;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    margin-bottom: 4rem;

    .back {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        cursor: pointer;

        &:hover {
            filter: brightness(.9);
        }
    }

    > h1 {
        font-weight: 500;
        font-size: 3.6rem;
        line-height: 4.7rem;
    }
`;

export const Form = styled.form`
    width: 100%;
    grid-area: form;

    display: flex;
    flex-direction: column;
    gap: 4rem;

    margin-bottom: 4rem;

    > div {
        display: flex;
        flex-direction: row;
        gap: 4rem;
    }

    @media (max-width: 700px) {
        > div {
        display: flex;
        flex-direction: column;
        gap: .8rem;
    }
    }
`;

export const Footer = styled.div`
    width: 100%;

    padding: 1.6rem;

    background: ${({theme}) => theme.COLORS.BACKGROUND_600};

    grid-area: footer;

    border: none;
    border-radius: 1rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1.6rem;


    margin: 0 auto 4rem;
`;

export const RouteButtons = styled.div`
    width: 100%;
    grid-area: buttons;

    display: flex;
    flex-direction: row;

    gap: 4rem;

    > button:first-child {
        color: ${({theme}) => theme.COLORS.PINK};
        background: ${({theme}) => theme.COLORS.BACKGROUND_600};
    }
    
    @media (max-width: 700px) {
        display: flex;
        flex-direction: column-reverse;
        gap: .8rem;
    }
`;